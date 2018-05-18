/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import { ConditionCreateTemplates, Features, NodeBlock, PropertiesEditor, _, node } from "tripetto";
import { IBlockProps } from "../types";

/** Assets */
import * as ICON from "../assets/icon.svg";

@node(PACKAGE_NAME, _("Boilerplate v%1", PACKAGE_VERSION), PACKAGE_VERSION)
export class Block extends NodeBlock<IBlockProps> {
    /** Specifies an icon for the block. */
    public static readonly Icon = ICON;

    /** Map the block constructor to the type property. */
    public readonly Type = Block;

    /** Invoked when slots for this block should be defined. */
    public OnSlots(): void {
        // Prepare your data slots here...
    }

    /** Invoked when the properties editor is requested. */
    public OnProperties(properties: PropertiesEditor): void {
        Features.Static.General(properties);
        Features.Name(this, properties);
    }

    /** If your block supports conditions, return the create templates here. */
    public OnConditions(): ConditionCreateTemplates {
        return [];
    }
}
