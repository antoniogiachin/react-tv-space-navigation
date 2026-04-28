import { RenderResult } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import '../../tests/helpers/configureTestRemoteControl';
export declare const setComponentLayoutSize: (component: ReactTestInstance, size: {
    width: number;
    height: number;
    x: number;
    y: number;
}) => void;
export declare const expectButtonToHaveFocus: (component: RenderResult, text: string) => void;
