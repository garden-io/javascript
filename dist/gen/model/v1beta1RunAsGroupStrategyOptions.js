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
exports.V1beta1RunAsGroupStrategyOptions = void 0;
/**
* RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
*/
class V1beta1RunAsGroupStrategyOptions {
    static getAttributeTypeMap() {
        return V1beta1RunAsGroupStrategyOptions.attributeTypeMap;
    }
}
exports.V1beta1RunAsGroupStrategyOptions = V1beta1RunAsGroupStrategyOptions;
V1beta1RunAsGroupStrategyOptions.discriminator = undefined;
V1beta1RunAsGroupStrategyOptions.attributeTypeMap = [
    {
        "name": "ranges",
        "baseName": "ranges",
        "type": "Array<V1beta1IDRange>"
    },
    {
        "name": "rule",
        "baseName": "rule",
        "type": "string"
    }
];
//# sourceMappingURL=v1beta1RunAsGroupStrategyOptions.js.map