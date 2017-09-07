/** Package information defined using webpack and retrieved from `package.json`. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import * as ICON from "../assets/icon.svg";
import { ConditionCreateTemplates, Features, NodeProvider, PropertiesEditor, _, node } from "@tripetto/forms-editor";
import { IProvider } from "../types";

@node(PACKAGE_NAME, _("Boilerplate v%1", PACKAGE_VERSION), PACKAGE_VERSION)
export class Provider extends NodeProvider<IProvider> {
    /** Specifies an icon for the provider. */
    public static readonly Icon = `url("${ICON}")`;

    /** Map the provider instance constructor to the type property. */
    public readonly Type = Provider;

    /** Invoked when slots for this provider should be defined. */
    public OnSlots(): void {
        // Prepare your data slots here...
    }

    /** Invoked when the properties editor is requested. */
    public OnProperties(properties: PropertiesEditor): void {
        Features.Static.General(properties);
        Features.Name(this, properties);
    }

    /** If your providers supports conditions, return the create templates here. */
    public OnConditions(): ConditionCreateTemplates {
        return [];
    }
}
