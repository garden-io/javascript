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
exports.V1beta1AllowedFlexVolume = void 0;
/**
* AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
*/
class V1beta1AllowedFlexVolume {
    static getAttributeTypeMap() {
        return V1beta1AllowedFlexVolume.attributeTypeMap;
    }
}
exports.V1beta1AllowedFlexVolume = V1beta1AllowedFlexVolume;
V1beta1AllowedFlexVolume.discriminator = undefined;
V1beta1AllowedFlexVolume.attributeTypeMap = [
    {
        "name": "driver",
        "baseName": "driver",
        "type": "string"
    }
];
//# sourceMappingURL=v1beta1AllowedFlexVolume.js.map