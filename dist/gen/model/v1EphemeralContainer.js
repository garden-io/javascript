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
exports.V1EphemeralContainer = void 0;
/**
* An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod\'s ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag.
*/
class V1EphemeralContainer {
    static getAttributeTypeMap() {
        return V1EphemeralContainer.attributeTypeMap;
    }
}
exports.V1EphemeralContainer = V1EphemeralContainer;
V1EphemeralContainer.discriminator = undefined;
V1EphemeralContainer.attributeTypeMap = [
    {
        "name": "args",
        "baseName": "args",
        "type": "Array<string>"
    },
    {
        "name": "command",
        "baseName": "command",
        "type": "Array<string>"
    },
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
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "imagePullPolicy",
        "baseName": "imagePullPolicy",
        "type": "string"
    },
    {
        "name": "lifecycle",
        "baseName": "lifecycle",
        "type": "V1Lifecycle"
    },
    {
        "name": "livenessProbe",
        "baseName": "livenessProbe",
        "type": "V1Probe"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<V1ContainerPort>"
    },
    {
        "name": "readinessProbe",
        "baseName": "readinessProbe",
        "type": "V1Probe"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "V1ResourceRequirements"
    },
    {
        "name": "securityContext",
        "baseName": "securityContext",
        "type": "V1SecurityContext"
    },
    {
        "name": "startupProbe",
        "baseName": "startupProbe",
        "type": "V1Probe"
    },
    {
        "name": "stdin",
        "baseName": "stdin",
        "type": "boolean"
    },
    {
        "name": "stdinOnce",
        "baseName": "stdinOnce",
        "type": "boolean"
    },
    {
        "name": "targetContainerName",
        "baseName": "targetContainerName",
        "type": "string"
    },
    {
        "name": "terminationMessagePath",
        "baseName": "terminationMessagePath",
        "type": "string"
    },
    {
        "name": "terminationMessagePolicy",
        "baseName": "terminationMessagePolicy",
        "type": "string"
    },
    {
        "name": "tty",
        "baseName": "tty",
        "type": "boolean"
    },
    {
        "name": "volumeDevices",
        "baseName": "volumeDevices",
        "type": "Array<V1VolumeDevice>"
    },
    {
        "name": "volumeMounts",
        "baseName": "volumeMounts",
        "type": "Array<V1VolumeMount>"
    },
    {
        "name": "workingDir",
        "baseName": "workingDir",
        "type": "string"
    }
];
//# sourceMappingURL=v1EphemeralContainer.js.map