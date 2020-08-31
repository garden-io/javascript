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
exports.V1ContainerStateTerminated = void 0;
/**
* ContainerStateTerminated is a terminated state of a container.
*/
class V1ContainerStateTerminated {
    static getAttributeTypeMap() {
        return V1ContainerStateTerminated.attributeTypeMap;
    }
}
exports.V1ContainerStateTerminated = V1ContainerStateTerminated;
V1ContainerStateTerminated.discriminator = undefined;
V1ContainerStateTerminated.attributeTypeMap = [
    {
        "name": "containerID",
        "baseName": "containerID",
        "type": "string"
    },
    {
        "name": "exitCode",
        "baseName": "exitCode",
        "type": "number"
    },
    {
        "name": "finishedAt",
        "baseName": "finishedAt",
        "type": "Date"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "signal",
        "baseName": "signal",
        "type": "number"
    },
    {
        "name": "startedAt",
        "baseName": "startedAt",
        "type": "Date"
    }
];
//# sourceMappingURL=v1ContainerStateTerminated.js.map