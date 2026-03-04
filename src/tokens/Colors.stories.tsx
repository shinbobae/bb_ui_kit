import { colors } from './colors';
import { vars } from '../style/theme.css'; // vars 가져오기
import * as styles from '../../.storybook/ColorPalette.css';

export default {
  title: 'Design System/Colors', // Storybook 사이드바의 경로
};

const ColorItem = ({ name, value }: { name: string; value: string }) => (
  <div className={styles.card}>
    <div className={styles.swatch} style={{ backgroundColor: value }} />
    <div className={styles.info}>
      <p className={styles.label}>{name}</p>
      <p className={styles.value}>{value}</p>
    </div>
  </div>
);

export const RawPalette = () => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h1>Raw Color Palette</h1>
    {Object.entries(colors).map(([group, value]) => (
      <div key={group} style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>
          {group.toUpperCase()}
        </h2>
        <div className={styles.grid}>
          {typeof value === 'string' ? (
            <ColorItem name={group} value={value} />
          ) : (
            Object.entries(value).map(([shade, hex]) => (
              <ColorItem key={shade} name={`${group}-${shade}`} value={hex} />
            ))
          )}
        </div>
      </div>
    ))}
  </div>
);

// 2. 시맨틱 컬러 팔레트 (Semantic Tokens)
export const SemanticTokens = () => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h1>Semantic Tokens</h1>
    <p>실제 코드(vars.color.primary 등)에서 사용하는 의미 기반 컬러입니다.</p>
    <div className={styles.grid}>
      <ColorItem name="Primary" value={vars.color.primary} />
      <ColorItem name="Secondary" value={vars.color.secondary} />
      <ColorItem name="Background" value={vars.color.background} />
      <ColorItem name="Text Main" value={vars.color.text.main} />
      <ColorItem name="Text Sub" value={vars.color.text.sub} />
    </div>
  </div>
);
