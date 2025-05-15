import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Robot from '../Robot';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

vi.mock('../Sound', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      play: vi.fn(),
      stop: vi.fn()
    }))
  };
});

describe('Robot Class', () => {
    let mockExperience;
    let robot;


    beforeEach(() => {
        // Mock de experience
        mockExperience = {
            scene: new THREE.Scene(),
            resources: {
                items: {
                    robotModel: {
                        scene: new THREE.Group(),
                        animations: Array.from({ length: 11 }, (_, i) => new THREE.AnimationClip(`Anim${i}`, -1, []))
                    }
                }
            },

            time: { delta: 16 },
            physics: {
                robotMaterial: new CANNON.Material('robot'),
                world: { addBody: vi.fn() }
            },
            keyboard: { getState: vi.fn(() => ({ up: false, down: false, left: false, right: false, space: false })) },
            debug: false
        };

        robot = new Robot(mockExperience);
    });

    afterEach(() => {
        robot = null;
    });

    it('debe inicializar el modelo 3D', () => {
        expect(robot.model).toBeDefined();
        expect(robot.group).toBeInstanceOf(THREE.Group);
        expect(mockExperience.scene.children.includes(robot.group)).toBe(true);
    });

    it('debe inicializar el cuerpo físico con CANNON', () => {
        expect(robot.body).toBeInstanceOf(CANNON.Body);
        expect(robot.body.mass).toBe(2);
        expect(mockExperience.physics.world.addBody).toHaveBeenCalledWith(robot.body);
    });

    it('debe inicializar las animaciones correctamente', () => {
        expect(robot.animation.mixer).toBeInstanceOf(THREE.AnimationMixer);
        expect(robot.animation.actions).toHaveProperty('idle');
        expect(robot.animation.actions.current).toBe(robot.animation.actions.idle);
    });

    it('debe actualizar correctamente la animación en update()', () => {
        const spy = vi.spyOn(robot.animation.mixer, 'update');
        robot.update();
        expect(spy).toHaveBeenCalledWith(0.016);
    });

    it('debe sincronizar la posición del grupo con la física en update()', () => {
        robot.body.position.set(1, 2, 3);
        robot.update();
        expect(robot.group.position.x).toBe(1);
        expect(robot.group.position.y).toBe(2);
        expect(robot.group.position.z).toBe(3);
    });

    it('debe ejecutar moveInDirection solo si hay VR activo', () => {
        global.window.userInteracted = true;
        mockExperience.renderer = { instance: { xr: { isPresenting: true } } };
        global.window.experience = { mobileControls: { intensity: 1, directionVector: { x: 1, y: 0 } } };

        const applyForceSpy = vi.spyOn(robot.body, 'applyForce');
        const playSpy = vi.spyOn(robot.animation, 'play');

        robot.moveInDirection();

        expect(applyForceSpy).toHaveBeenCalled();
        expect(playSpy).toHaveBeenCalledWith('walking');
    });
});
