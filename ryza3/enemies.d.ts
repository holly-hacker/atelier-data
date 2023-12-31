// AUTO-GENERATED by typescript-type-def

export default types;
export namespace types {
    export type I32 = number;
    export type U32 = number;
    export type F32 = number;
    export type EnemyDrop = {
        "item_tag": string;
        "rate": types.U32;
        "num": types.U32;
        "quality_min": types.F32;
        "quality_max": types.F32;
        "potential_min": types.F32;
        "potential_max": types.F32;
        "potential_num_min": types.F32;
        "potential_num_max": types.F32;
        "potential_lv_min": types.F32;
        "potential_lv_max": types.F32;
        "quality_min_adj": types.F32;
        "quality_max_adj": types.F32;
        "potential_min_adj": types.F32;
        "potential_max_adj": types.F32;
        "potential_num_min_adj": types.U32;
        "potential_num_max_adj": types.U32;
        "potential_lv_min_adj": types.U32;
        "potential_lv_max_adj": types.U32;
        "super_pot_rate": types.U32;
        "factor": string;
        "eff": (string | null);
    };
    export type EnemyStatus = {
        "exp": types.U32;
        "money": types.U32;
        "exp_rosca": types.U32;
        "money_rosca": types.U32;
        "gold_coin": types.U32;
        "gold_coin_rate": types.U32;
        "drop_tag": string;
        "skill_tag": string;
        "extra_skill_tag": string;
        "lv": types.U32;
        "stun": types.U32;
        "key_make": types.U32;
        "atk_num": types.U32;
        "burst_up": types.U32;
        "burst_max": types.U32;
        "hp": types.I32;
        "atk": types.I32;
        "def": types.I32;
        "spd": types.I32;
        "bad_resist": (types.U32)[];
        "resist_non": types.U32;
        "key_create_tag": string;
        "att": (string)[];

        /**
         * `sp_item_tag` from drop data
         */
        "sp_item_tag": string;
        "drops": (types.EnemyDrop)[];
    };
    export type Enemy = {
        "name": string;
        "library_note": (string | null);
        "is_big": boolean;
        "img_no": types.I32;
        "wait_action": boolean;
        "library_rank_health": types.U32;
        "library_rank_attack": types.U32;
        "library_rank_speed": types.U32;
        "library_rank_defense": types.U32;
        "dlc": (string | null);
        "shoot_up": boolean;
        "monster_tag": string;
        "chara_tag": string;
        "race_tag": string;
        "size": string;
        "division": string;
        "statusses": (types.EnemyStatus)[];
    };
}
