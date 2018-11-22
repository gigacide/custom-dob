/** Dependencies */
import { NodeBlock, ValidatorResult, validator } from "tripetto-collector";

export abstract class Example extends NodeBlock {
    @validator
    performValidation(): ValidatorResult {
        // This example validator will always pass...

        return true;
    }
}
