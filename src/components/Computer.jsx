import {forwardRef, useMemo} from "react";
import {useGLTF} from '@react-three/drei'
import * as THREE from "three";
import {Vector3, VideoTexture} from "three";
import {GhibliShader} from "./GhibliShader";

export const Computer = forwardRef((props, ref) => {
    const {nodes, materials} = useGLTF(process.env.PUBLIC_URL + '/models/computer.glb')

    const uniforms = useMemo(
        () => ({
            colorMap: {
                value: props.colors,
            },
            brightnessThresholds: {
                value: [0.6, 1, 0.2, 0.5],
            },
            lightPosition: {value: new Vector3(12, -20, 15)},
        }),
        [props.colors]
    );

    const video = document.getElementById('video');
    video.setAttribute("id", "video");
    video.loop = true;
    video.muted = true;
    video.play();

    const videoTexture = new VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    return (
        <group {...props} dispose={null}>
            <group position={[0.5, 0, 0]} ref={ref} rotation={[-Math.PI / 2, 0, -2.1]} scale={0.006}>
                <group position={[0, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_1.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_2.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_3.geometry}
                    >
                        <meshBasicMaterial attach="material" map={videoTexture}/>
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_4.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_5.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_6.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_7.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_8.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_9.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.monitor_vintage_2_0001_10.geometry}
                    >
                        <shaderMaterial
                            attach="material"
                            {...GhibliShader}
                            uniforms={uniforms}
                        />
                    </mesh>
                </group>
            </group>
        </group>
    )
});

useGLTF.preload(process.env.PUBLIC_URL + '/models/computer.glb')