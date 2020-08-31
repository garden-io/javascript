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
exports.V1alpha1PodPresetSpec = void 0;
/**
* PodPresetSpec is a description of a pod preset.
*/
class V1alpha1PodPresetSpec {
    static getAttributeTypeMap() {
        return V1alpha1PodPresetSpec.attributeTypeMap;
    }
}
exports.V1alpha1PodPresetSpec = V1alpha1PodPresetSpec;
V1alpha1PodPresetSpec.discriminator = undefined;
V1alpha1PodPresetSpec.attributeTypeMap = [
    {
        "name": "env",
        "baseName": "env",
        "type": "Array<V1EnvVar>"
    },
    {
        "name": "envFrom",
        "baseName": "envFrom",
        "type": "Array<V1EnvFromSource>"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "volumeMounts",
        "baseName": "volumeMounts",
        "type": "Array<V1VolumeMount>"
    },
    {
        "name": "volumes",
        "baseName": "volumes",
        "type": "Array<V1Volume>"
    }
];
//# sourceMappingURL=v1alpha1PodPresetSpec.js.map