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
exports.V1PersistentVolumeClaimSpec = void 0;
/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
class V1PersistentVolumeClaimSpec {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimSpec.attributeTypeMap;
    }
}
exports.V1PersistentVolumeClaimSpec = V1PersistentVolumeClaimSpec;
V1PersistentVolumeClaimSpec.discriminator = undefined;
V1PersistentVolumeClaimSpec.attributeTypeMap = [
    {
        "name": "accessModes",
        "baseName": "accessModes",
        "type": "Array<string>"
    },
    {
        "name": "dataSource",
        "baseName": "dataSource",
        "type": "V1TypedLocalObjectReference"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "V1ResourceRequirements"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "storageClassName",
        "baseName": "storageClassName",
        "type": "string"
    },
    {
        "name": "volumeMode",
        "baseName": "volumeMode",
        "type": "string"
    },
    {
        "name": "volumeName",
        "baseName": "volumeName",
        "type": "string"
    }
];
//# sourceMappingURL=v1PersistentVolumeClaimSpec.js.map