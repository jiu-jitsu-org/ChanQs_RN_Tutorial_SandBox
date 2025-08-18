# 📖 React-Native (TypeScript) Tutorial


## :open_file_folder: 프로젝트 구조 

- Feature-based Architecture</br></br>
**기능 단위(Feature-based)**로 디렉토리를 나누고,</br>
**비즈니스 로직과 프레젠테이션(UI)**를 계층적으로 분리해서</br>
협업과 확장에 최적화된 아키텍처입니다.</br></br>
```bash
src/
├── app/                    # 앱 전역 설정 (navigation, theme 등)
├── features/               # 기능별 폴더 구조 
│   ├── feature_1/
│   │     ├── screens/      # 화면 단위 
│   │     ├── components/   # 해당 feature에서만 사용하는 UI 컴포넌트
│   │     ├── services/     # API 통신, 비즈니스 로직
│   │     └── store/        # feature-local 상태관리 (slice 또는 zustand)
│   ├── feature_2/
│   │   ...
│   └── feature_3/
├── shared/                 # 모든 feature에서 공통 
│   ├── components/         # 공통 UI
│   ├── hooks/              # 공통 Hook
│   └── utils/              # 공통 
├── navigation/             # react-navigation 설정
├── store/                  # 전역 상태관리 store
└── index.tsx               # 앱 진입
```

</br>

## Export

### export default
```
// postService.ts
const getPosts = () => { ... };
export default getPosts;
```

```
import getPosts from './postService';
```

- 기본 export는 {} 없이 바로 가져옵니다.
- 파일당 하나만 export default로 정의할 수 있습니다.
- import할 때 원하는 이름으로 바꿔서 가져올 수도 있습니다.

```
import abc from './postService';  // getPosts를 abc라는 이름으로 사용 가능
```

</br>

### export
```
// mathUtils.ts
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```
또는

```
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { add, subtract };
```

```
import { add, subtract } from './mathUtils';
```

- {} 중괄호를 사용하여 이름으로 가져옵니다.
- 여러 개의 export를 한 파일에서 가능합니다.
- 이름이 일치해야만 import 가능합니다.

```
import { add } from './mathUtils'; // ✅ OK
import { plus } from './mathUtils'; // ❌ Error (이름 안맞음)
```