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
exports.V1VolumeAttachmentSource = void 0;
/**
* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
*/
class V1VolumeAttachmentSource {
    static getAttributeTypeMap() {
        return V1VolumeAttachmentSource.attributeTypeMap;
    }
}
exports.V1VolumeAttachmentSource = V1VolumeAttachmentSource;
V1VolumeAttachmentSource.discriminator = undefined;
V1VolumeAttachmentSource.attributeTypeMap = [
    {
        "name": "inlineVolumeSpec",
        "baseName": "inlineVolumeSpec",
        "type": "V1PersistentVolumeSpec"
    },
    {
        "name": "persistentVolumeName",
        "baseName": "persistentVolumeName",
        "type": "string"
    }
];
//# sourceMappingURL=v1VolumeAttachmentSource.js.map