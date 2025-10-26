import { Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: {
        object: Object3D;
        scale?: number;
        'position-y'?: number;
        'rotation-y'?: number;
      };
    }
  }
}

export {};
