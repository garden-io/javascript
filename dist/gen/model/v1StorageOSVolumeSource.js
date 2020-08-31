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
exports.V1StorageOSVolumeSource = void 0;
/**
* Represents a StorageOS persistent volume resource.
*/
class V1StorageOSVolumeSource {
    static getAttributeTypeMap() {
        return V1StorageOSVolumeSource.attributeTypeMap;
    }
}
exports.V1StorageOSVolumeSource = V1StorageOSVolumeSource;
V1StorageOSVolumeSource.discriminator = undefined;
V1StorageOSVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1LocalObjectReference"
    },
    {
        "name": "volumeName",
        "baseName": "volumeName",
        "type": "string"
    },
    {
        "name": "volumeNamespace",
        "baseName": "volumeNamespace",
        "type": "string"
    }
];
//# sourceMappingURL=v1StorageOSVolumeSource.js.map