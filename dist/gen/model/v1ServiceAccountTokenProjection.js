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
exports.V1ServiceAccountTokenProjection = void 0;
/**
* ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
*/
class V1ServiceAccountTokenProjection {
    static getAttributeTypeMap() {
        return V1ServiceAccountTokenProjection.attributeTypeMap;
    }
}
exports.V1ServiceAccountTokenProjection = V1ServiceAccountTokenProjection;
V1ServiceAccountTokenProjection.discriminator = undefined;
V1ServiceAccountTokenProjection.attributeTypeMap = [
    {
        "name": "audience",
        "baseName": "audience",
        "type": "string"
    },
    {
        "name": "expirationSeconds",
        "baseName": "expirationSeconds",
        "type": "number"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    }
];
//# sourceMappingURL=v1ServiceAccountTokenProjection.js.map