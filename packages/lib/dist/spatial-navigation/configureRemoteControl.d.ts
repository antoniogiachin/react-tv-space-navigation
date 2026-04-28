import { Direction } from '@bam.tech/lrud';
type SubscriberType = any;
export interface RemoteControlConfiguration {
    remoteControlSubscriber: (lrudCallback: (direction: Direction | null) => void) => SubscriberType;
    remoteControlUnsubscriber: (subscriber: SubscriberType) => void;
}
export declare const configureRemoteControl: (options: RemoteControlConfiguration) => void;
export declare const getRemoteControlSubscriber: () => ((lrudCallback: (direction: Direction | null) => void) => SubscriberType) | undefined;
export declare const getRemoteControlUnsubscriber: () => ((subscriber: SubscriberType) => void) | undefined;
export {};
