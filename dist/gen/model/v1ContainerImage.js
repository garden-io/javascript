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
exports.V1ContainerImage = void 0;
/**
* Describe a container image
*/
class V1ContainerImage {
    static getAttributeTypeMap() {
        return V1ContainerImage.attributeTypeMap;
    }
}
exports.V1ContainerImage = V1ContainerImage;
V1ContainerImage.discriminator = undefined;
V1ContainerImage.attributeTypeMap = [
    {
        "name": "names",
        "baseName": "names",
        "type": "Array<string>"
    },
    {
        "name": "sizeBytes",
        "baseName": "sizeBytes",
        "type": "number"
    }
];
//# sourceMappingURL=v1ContainerImage.js.map