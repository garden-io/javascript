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
exports.V1DeleteOptions = void 0;
/**
* DeleteOptions may be provided when deleting an API object.
*/
class V1DeleteOptions {
    static getAttributeTypeMap() {
        return V1DeleteOptions.attributeTypeMap;
    }
}
exports.V1DeleteOptions = V1DeleteOptions;
V1DeleteOptions.discriminator = undefined;
V1DeleteOptions.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "dryRun",
        "baseName": "dryRun",
        "type": "Array<string>"
    },
    {
        "name": "gracePeriodSeconds",
        "baseName": "gracePeriodSeconds",
        "type": "number"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "orphanDependents",
        "baseName": "orphanDependents",
        "type": "boolean"
    },
    {
        "name": "preconditions",
        "baseName": "preconditions",
        "type": "V1Preconditions"
    },
    {
        "name": "propagationPolicy",
        "baseName": "propagationPolicy",
        "type": "string"
    }
];
//# sourceMappingURL=v1DeleteOptions.js.map