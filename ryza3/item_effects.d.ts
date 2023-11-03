// AUTO-GENERATED by typescript-type-def

export default types;
export namespace types {
    export type EffectAttribute = {
        "action": string;
        "attribute": (string | null);
        "min_1": (string | null);
        "max_1": (string | null);
        "min_2": (string | null);
        "max_2": (string | null);
    };
    export type ItemEffect = {

        /**
         * The name of the effect as it is shown in-game
         */
        "name": string;
        "description": (string | null);
        "kind": (string | null);
        "base_attribute": (string | null);
        "attributes": (types.EffectAttribute)[];
    };
    export type ItemEffectData = {
        "item_effects": Record<string, types.ItemEffect>;
    };
}
