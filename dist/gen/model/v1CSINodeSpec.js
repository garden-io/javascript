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
exports.V1CSINodeSpec = void 0;
/**
* CSINodeSpec holds information about the specification of all CSI drivers installed on a node
*/
class V1CSINodeSpec {
    static getAttributeTypeMap() {
        return V1CSINodeSpec.attributeTypeMap;
    }
}
exports.V1CSINodeSpec = V1CSINodeSpec;
V1CSINodeSpec.discriminator = undefined;
V1CSINodeSpec.attributeTypeMap = [
    {
        "name": "drivers",
        "baseName": "drivers",
        "type": "Array<V1CSINodeDriver>"
    }
];
//# sourceMappingURL=v1CSINodeSpec.js.map