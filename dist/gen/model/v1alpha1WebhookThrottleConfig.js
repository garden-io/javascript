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
exports.V1alpha1WebhookThrottleConfig = void 0;
/**
* WebhookThrottleConfig holds the configuration for throttling events
*/
class V1alpha1WebhookThrottleConfig {
    static getAttributeTypeMap() {
        return V1alpha1WebhookThrottleConfig.attributeTypeMap;
    }
}
exports.V1alpha1WebhookThrottleConfig = V1alpha1WebhookThrottleConfig;
V1alpha1WebhookThrottleConfig.discriminator = undefined;
V1alpha1WebhookThrottleConfig.attributeTypeMap = [
    {
        "name": "burst",
        "baseName": "burst",
        "type": "number"
    },
    {
        "name": "qps",
        "baseName": "qps",
        "type": "number"
    }
];
//# sourceMappingURL=v1alpha1WebhookThrottleConfig.js.map