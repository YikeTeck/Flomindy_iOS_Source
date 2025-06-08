import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const FloatingEEG = ({ bubblePosition, setBubblePosition, frequency, setInBackgroundMode, setIsActive }) => {
  const [lastTap, setLastTap] = useState(0);
  const longPressTimer = useRef(null);
  const touchStart = useRef({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    const touch = e.nativeEvent.touches[0];
    touchStart.current = {
      x: touch.pageX,
      y: touch.pageY,
    };

    longPressTimer.current = setTimeout(() => {
      setIsActive(false);
      setInBackgroundMode(false);
    }, 3300);
  };

  const handleTouchMove = (e) => {
    const touch = e.nativeEvent.touches[0];
    const dx = touch.pageX - touchStart.current.x;
    const dy = touch.pageY - touchStart.current.y;

    const newLeft = Math.min(width - 80, Math.max(20, bubblePosition.left + dx));
    const newTop = Math.min(height - 80, Math.max(20, bubblePosition.top + dy));

    setBubblePosition({ top: newTop, left: newLeft });

    touchStart.current = {
      x: touch.pageX,
      y: touch.pageY,
    };
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setInBackgroundMode(false);
    }
    setLastTap(now);
  };

  return (
    <View
      style={[
        styles.floatingContainer,
        {
          top: bubblePosition.top,
          left: bubblePosition.left,
        },
      ]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <TouchableOpacity
        onPress={handleTap}
        activeOpacity={1}
        style={styles.touchable}
      >
        <Text style={styles.floatingEEGText}>EEG</Text>
        <Text style={styles.floatingFrequencyText}>{frequency.toFixed(1)} Hz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    width: 70,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingEEGText: {
    color: '#0f0',
    fontWeight: 'bold',
    fontSize: 14,
  },
  floatingFrequencyText: {
    color: '#ffffff',
    fontSize: 13,
  },
});

export default FloatingEEG;
