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
exports.V1VolumeAttachmentStatus = void 0;
/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
*/
class V1VolumeAttachmentStatus {
    static getAttributeTypeMap() {
        return V1VolumeAttachmentStatus.attributeTypeMap;
    }
}
exports.V1VolumeAttachmentStatus = V1VolumeAttachmentStatus;
V1VolumeAttachmentStatus.discriminator = undefined;
V1VolumeAttachmentStatus.attributeTypeMap = [
    {
        "name": "attachError",
        "baseName": "attachError",
        "type": "V1VolumeError"
    },
    {
        "name": "attached",
        "baseName": "attached",
        "type": "boolean"
    },
    {
        "name": "attachmentMetadata",
        "baseName": "attachmentMetadata",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "detachError",
        "baseName": "detachError",
        "type": "V1VolumeError"
    }
];
//# sourceMappingURL=v1VolumeAttachmentStatus.js.map