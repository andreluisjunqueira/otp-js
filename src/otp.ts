import jsSHA from 'jssha';
import {base32tohex, leftpad, dec2hex, hex2dec} from './helpers';

const getCode = (secretKey: string) => {
  const key = base32tohex(secretKey);
  const epoch = Math.round(new Date().getTime() / 1000.0);
  const time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, '0');

  const sha = new jsSHA('SHA-1', 'HEX');
  sha.setHMACKey(key, 'HEX');
  sha.update(time);

  const hmac = sha.getHMAC('HEX');
  const offset = hex2dec(hmac.substring(hmac.length - 1));
  const code = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff')) + '';

  return code.substr(code.length - 6, 6);
};

export default getCode;
