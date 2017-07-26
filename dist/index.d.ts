import * as Tripetto from "@tripetto/forms";
export declare class Provider extends Tripetto.NodeProvider {
    /** Specifies an icon for the provider. */
    static readonly Icon: string;
    /** Map the provider instance constructor to the type property. */
    readonly Type: typeof Provider;
    /** Invoked when slots for this provider should be defined. */
    protected OnSlots(): void;
    /** Invoked when the properties editor is requested. */
    OnProperties(pProperties: Tripetto.UI.Properties.PropertyCards): void;
    /** If your providers supports conditions, return them here. */
    OnConditions(): Tripetto.ConditionTemplates;
}
