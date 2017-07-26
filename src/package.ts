import { ICON } from "./icon";

/** These constant values are defined through webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

export namespace Package {
    /** Contains the package name. */
    export const Name = PACKAGE_NAME;

    /** Contains the package version. */
    export const Version = PACKAGE_VERSION;

    /** Contains an icon for the package. */
    export const Icon = ICON;
}
