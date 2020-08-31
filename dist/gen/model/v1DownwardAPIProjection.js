"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1DownwardAPIProjection = void 0;
/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
*/
class V1DownwardAPIProjection {
    static getAttributeTypeMap() {
        return V1DownwardAPIProjection.attributeTypeMap;
    }
}
exports.V1DownwardAPIProjection = V1DownwardAPIProjection;
V1DownwardAPIProjection.discriminator = undefined;
V1DownwardAPIProjection.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1DownwardAPIVolumeFile>"
    }
];
//# sourceMappingURL=v1DownwardAPIProjection.js.map