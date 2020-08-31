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
exports.V1CustomResourceDefinition = void 0;
/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
*/
class V1CustomResourceDefinition {
    static getAttributeTypeMap() {
        return V1CustomResourceDefinition.attributeTypeMap;
    }
}
exports.V1CustomResourceDefinition = V1CustomResourceDefinition;
V1CustomResourceDefinition.discriminator = undefined;
V1CustomResourceDefinition.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1CustomResourceDefinitionSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1CustomResourceDefinitionStatus"
    }
];
//# sourceMappingURL=v1CustomResourceDefinition.js.map