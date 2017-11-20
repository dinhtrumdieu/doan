import React from 'react';
import {Animated} from 'react-native';

export default class AnimationUtil {

    static animationImages: Array = [];
    static observer;

    static addAnimationProductImage(x, y, image) {
        const animationImage = this.createAnimationProductImage(x, y, image);
        this.animationImages.push(animationImage);
        if (this.observer) {
            this.observer.forceUpdate();
        }
    }

    static removeAnimationProductImage(animationImage) {
        this.animationImages = this.animationImages.filter((item) => {
            if (item.aid !== animationImage.aid) {
                return item;
            }
        });
        if (this.observer) {
            this.observer.forceUpdate();
        }
    }

    static createAnimationProductImage(x, y, image) {
        return {
            aid: new Date().getTime(),
            x,
            y,
            image: image,
            translateX: new Animated.Value(0),
            translateY: new Animated.Value(0),
            scale: new Animated.Value(1),
            isStarted: false,
        };
    }

    static animateTo(x, y, scale) {
        this.animationImages.forEach((item) => {
            if (item.isStarted) {
                return
            }
            item.isStarted = true;
            Animated.parallel(
                [
                    Animated.timing(
                        item.translateX,
                        {
                            toValue: x - item.x,
                            duration: 800,
                        }
                    ),
                    Animated.timing(
                        item.translateY,
                        {
                            toValue: -item.y + y,
                            duration: 800,
                        }
                    ),
                    Animated.timing(
                        item.scale,
                        {
                            toValue: scale,
                            duration: 800,
                        }
                    ),
                ]
            ).start(() => {
                this.removeAnimationProductImage(item);
            });
        })
    }

}