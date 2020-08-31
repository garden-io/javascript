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
exports.V1VolumeAttachmentSpec = void 0;
/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
class V1VolumeAttachmentSpec {
    static getAttributeTypeMap() {
        return V1VolumeAttachmentSpec.attributeTypeMap;
    }
}
exports.V1VolumeAttachmentSpec = V1VolumeAttachmentSpec;
V1VolumeAttachmentSpec.discriminator = undefined;
V1VolumeAttachmentSpec.attributeTypeMap = [
    {
        "name": "attacher",
        "baseName": "attacher",
        "type": "string"
    },
    {
        "name": "nodeName",
        "baseName": "nodeName",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "V1VolumeAttachmentSource"
    }
];
//# sourceMappingURL=v1VolumeAttachmentSpec.js.map