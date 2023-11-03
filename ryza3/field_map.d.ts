// AUTO-GENERATED by typescript-type-def

export default types;
export namespace types {
    export type Usize = number;
    export type FieldMap = {
        "field_map_name": (string | null);
        "data_file_name": string;
        "load_region": (string | null);
        "range_min_x": types.Usize;
        "range_min_z": types.Usize;
        "range_max_x": types.Usize;
        "range_max_z": types.Usize;
        "navi_range_min_x": (types.Usize | null);
        "navi_range_min_z": (types.Usize | null);
        "navi_range_max_x": (types.Usize | null);
        "navi_range_max_z": (types.Usize | null);
        "area_tag": string;
        "region_tag": string;
        "qua_min": (types.Usize | null);
        "qua_max": (types.Usize | null);
        "num_min": (types.Usize | null);
        "num_max": (types.Usize | null);
        "grade_min": (types.Usize | null);
        "grade_max": (types.Usize | null);
    };
    export type F32 = number;
    export type RegionMap = {
        "image_name": string;
        "rot": [types.F32, types.F32, types.F32];
        "pos": [types.F32, types.F32, types.F32];
        "scale": [types.F32, types.F32, types.F32];
    };
    export type FieldMapData = {
        "field_maps": (types.FieldMap)[];
        "region_maps": Record<types.Usize, types.RegionMap>;
    };
}
