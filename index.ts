import mapNumber from './src/mapNumber';
import getCode from './src/otp';

interface OtpData {
  code: string;
  expireTime: number;
}

export default function otpJS(secret: string): OtpData {
  if (!secret) {
    throw 'Um secret deve ser fornecido';
  }
  const code = getCode(secret);
  const epoch = Math.round(new Date().getTime() / 1000.0);
  const countDown = 30 - (epoch % 30);
  const expireTime = mapNumber(countDown, 0, 30, 0, 30);

  const data = {
    code,
    expireTime,
  };

  return data;
}
