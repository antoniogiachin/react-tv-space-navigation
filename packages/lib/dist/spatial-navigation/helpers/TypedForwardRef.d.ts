import { ForwardedRef, ReactElement, RefAttributes, PropsWithoutRef } from 'react';
/**
 * This works like React.forwardRef but for components with generic props.
 * @warning Don't use this if your component type isn't generic => `const Component = <T>() => {...}` and displayName is not supported yet
 */
export declare function typedForwardRef<T, P = unknown>(render: (props: PropsWithoutRef<P>, ref: ForwardedRef<T>) => ReactElement | null): (props: P & RefAttributes<T>) => ReactElement | null;
