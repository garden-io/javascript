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
import { V1beta1VolumeAttachmentSource } from './v1beta1VolumeAttachmentSource';
/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
export declare class V1beta1VolumeAttachmentSpec {
    /**
    * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
    */
    'attacher': string;
    /**
    * The node that the volume should be attached to.
    */
    'nodeName': string;
    'source': V1beta1VolumeAttachmentSource;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
