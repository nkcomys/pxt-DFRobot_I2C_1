enum MyAddr{
    //% block="0x70"
    ADDR = 0x70,
}

/**
 * 自定义图形块
 */
//% weight=100 color=#0fbc11 icon="\uf126" block="I2C Multiplexer"
namespace multiplexer {
    let I2CAddr = 0x70;
    /**
     * TODO:设置I2C地址
     * @param addr I2C地址 
     */
    //% block="Set I2C addr %addr"
    //% weight=98
    export function setAddr(eAddr: MyAddr){
        I2CAddr = eAddr;
    }
     /**
     * TODO: 获取版本
     */
    //% block="Select Port %port"
    //% port.min=0 port.max=7
    //% weight=93
    export function selectPort(port:number) {
        pins.i2cWriteNumber(I2CAddr, (1 << port) & 0xFF, NumberFormat.UInt8LE);
        //pins.i2cWriteBuffer(I2CAddr, (0x00000001 << port));
    }
    
}