const ko = {
  common: {
    or: '또는',
    cancel: '취소',
    reset: '초기화',
    save: '저장',
    search: '검색',
    edit: '편집하다',
    remove: '없애다',
    new: '새로운',
    export: 'Excel로 내보내기',
    noDataToExport: '내보낼 데이터가 없습니다',
    import: '수입',
    discard: '포기',
    yes: '예',
    no: '아니오',
    pause: '중지',
    areYouSure: '확실합니까?',
    view: '보다',
    destroy: '지우다',
    mustSelectARow: '행을 선택해야합니다',
  },

  app: {
    title: '앱',
  },

  entities: {
    customer: {
      name: '고객',
      label: '고객',
      menu: '고객',
      exporterFileName: 'customer_export',
      list: {
        menu: '고객',
        title: '고객',
      },
      create: {
        success: '고객이 성공적으로 저장되었습니다',
      },
      update: {
        success: '고객이 성공적으로 저장되었습니다',
      },
      destroy: {
        success: '고객이 성공적으로 삭제되었습니다',
      },
      destroyAll: {
        success: '고객이 성공적으로 삭제되었습니다',
      },
      edit: {
        title: '고객 편집',
      },
      fields: {
        id: 'Id',
        'name': '이름',
        'birthdateRange': '생년월일',
        'birthdate': '생년월일',
        'gender': '성별',
        createdAt: '생성 날짜',
        updatedAt: '업데이트 날짜',
        createdAtRange: '생성 날짜',
      },
      enumerators: {
        'gender': {
          'male': '남자',
          'female': '여자',
        },
      },
      new: {
        title: '신규고객',
      },
      view: {
        title: '고객 보기',
      },
      importer: {
        title: '고객 가져오기',
        fileName: 'customer_import_template',
        hint:
          '파일/이미지 열은 공백으로 구분된 파일의 URL이어야 한다.',
      },
    },

    product: {
      name: '제품.',
      label: '제품.',
      menu: '제품.',
      exporterFileName: 'product_export',
      list: {
        menu: '제품.',
        title: '제품.',
      },
      create: {
        success: '제품이 성공적으로 저장되었습니다',
      },
      update: {
        success: '제품이 성공적으로 저장되었습니다',
      },
      destroy: {
        success: '제품이 성공적으로 삭제되었습니다',
      },
      destroyAll: {
        success: '제품이 성공적으로 삭제되었습니다',
      },
      edit: {
        title: '제품 편집',
      },
      fields: {
        id: 'Id',
        'name': '이름',
        'description': '기술',
        'unitPriceRange': '단가',
        'unitPrice': '단가',
        'photos': '사진',
        createdAt: '생성 날짜',
        updatedAt: '업데이트 날짜',
        createdAtRange: '생성 날짜',
      },
      enumerators: {

      },
      new: {
        title: '신상품',
      },
      view: {
        title: '제품 보기',
      },
      importer: {
        title: '제품 가져오기',
        fileName: 'product_import_template',
        hint:
          '파일/이미지 열은 공백으로 구분된 파일의 URL이어야 한다.',
      },
    },

    order: {
      name: '주문',
      label: '주문',
      menu: '주문',
      exporterFileName: 'order_export',
      list: {
        menu: '주문',
        title: '주문',
      },
      create: {
        success: '주문이 성공적으로 저장되었습니다',
      },
      update: {
        success: '주문이 성공적으로 저장되었습니다',
      },
      destroy: {
        success: '주문이 성공적으로 삭제되었습니다',
      },
      destroyAll: {
        success: '주문이 성공적으로 삭제되었습니다',
      },
      edit: {
        title: '주문 수정',
      },
      fields: {
        id: 'Id',
        'customer': '고객',
        'products': '제품',
        'employee': '직원',
        'delivered': '배송',
        'attachments': '첨부',
        createdAt: '생성 날짜',
        updatedAt: '업데이트 날짜',
        createdAtRange: '생성 날짜',
      },
      enumerators: {

      },
      new: {
        title: '새 주문',
      },
      view: {
        title: '주문 보기',
      },
      importer: {
        title: '주문 가져오기',
        fileName: 'order_import_template',
        hint:
          '파일/이미지 열은 공백으로 구분된 파일의 URL이어야 한다.',
      },
    },
  },

  auth: {
    profile: {
      title: '프로필 수정',
      success: '프로필이 성공적으로 업데이트되었습니다',
    },
    createAnAccount: '계정 만들기',
    rememberMe: '기억하세요.',
    forgotPassword: '비밀번호를 잊으셨나요',
    signin: '로그인',
    signup: '가입하기',
    signout: '로그 아웃',
    alreadyHaveAnAccount:
      '이미 계정이 있습니까? 로그인하십시오.',
    signinWithAnotherAccount:
      '다른 계정으로 로그인',
    emailUnverified: {
      message: `계속하려면 <strong>{0}</strong>에서 이메일을 확인하십시오.`,
      submit: `이메일 확인 재발송`,
    },
    emptyPermissions: {
      message: `아직 권한이 없습니다. 관리자가 권한을 부여 할 때까지 기다리십시오.`,
    },
    passwordResetEmail: {
      message: '비밀번호 재설정 이메일 보내기',
      error: `이메일이 인식되지 않습니다`,
    },
    passwordReset: {
      message: '암호를 재설정',
    },
    emailAddressVerificationEmail: {
      error: `이메일이 인식되지 않습니다`,
    },
    verificationEmailSuccess: `확인 이메일이 성공적으로 전송되었습니다`,
    passwordResetEmailSuccess: `비밀번호 재설정 이메일이 성공적으로 전송되었습니다`,
    passwordResetSuccess: `비밀번호가 성공적으로 변경되었습니다`,
    verifyEmail: {
      success: '이메일 확인 완료',
      message:
        '잠시만, 귀하의 이메일이 확인 중입니다 ...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: '모든 리소스에 대한 전체 액세스',
    },
    editor: {
      label: 'Editor',
      description: '모든 리소스에 대한 액세스 권한 편집',
    },
    viewer: {
      label: 'Viewer',
      description: '모든 리소스에 대한 액세스 권한보기',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: '감사 로그를 볼 수있는 액세스',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `사용자 역할 관리를위한 모든 권한`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: '모든 엔터티에 대한 액세스 권한 편집',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: '모든 엔터티에 대한 액세스 권한보기',
    },
    customerEditor: {
      label: 'Customer Editor',
      description: '고객에 대한 액세스 수정',
    },
    customerViewer: {
      label: 'Customer Viewer',
      description: '고객에 대한 액세스 권한보기',
    },
    productEditor: {
      label: 'Product Editor',
      description: '제품에 대한 액세스 수정',
    },
    productViewer: {
      label: 'Product Viewer',
      description: '제품에 대한 액세스 권한보기',
    },
    orderEditor: {
      label: 'Order Editor',
      description: '주문에 대한 액세스 수정',
    },
    orderViewer: {
      label: 'Order Viewer',
      description: '주문에 대한 액세스 권한보기',
    },
  },

  iam: {
    title: '신원 및 액세스 관리',
    menu: '나는',
    disable: '비활성화',
    disabled: '비활성화',
    enabled: '활성화',
    enable: '활성화',
    doEnableSuccess: '사용자가 성공적으로 활성화됨',
    doDisableSuccess: '사용자가 성공적으로 비활성화됨',
    doDisableAllSuccess: '사용자가 성공적으로 비활성화됨',
    doEnableAllSuccess: '사용자가 성공적으로 활성화됨',
    doAddSuccess: '사용자가 성공적으로 저장됨',
    doUpdateSuccess: '사용자가 성공적으로 저장됨',
    viewBy: '보기 기준',
    users: {
      name: '사용자',
      label: '사용자',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        '권한이 성공적으로 제거되었습니다',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        '권한이 성공적으로 제거되었습니다',
    },
    edit: {
      title: '사용자 편집',
    },
    new: {
      title: '신규 사용자',
      titleModal: '신규 사용자',
      emailsHint:
        '쉼표 문자를 사용하여 여러 이메일 주소를 구분하십시오.',
    },
    view: {
      title: '사용자보기',
      activity: '활동',
    },
    importer: {
      title: '사용자 가져 오기',
      fileName: 'users_import_template',
      hint:
        '파일/이미지 열은 공백으로 구분된 파일의 URL이어야 한다. 관계는 공백으로 구분 된 참조 레코드의 ID 여야합니다. 역할은 공백으로 구분 된 역할 ID 여야합니다.',
    },
    errors: {
      userAlreadyExists:
        '이 이메일을 가진 사용자가 이미 존재합니다',
      userNotFound: '사용자를 찾을 수 없습니다',
      disablingHimself: `당신은 자신을 비활성화 할 수 없습니다`,
      revokingOwnPermission: `자신의 소유자 권한을 취소 할 수 없습니다`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: '인증 Uid',
      avatars: '프로필 사진',
      email: '이메일',
      emails: '이메일',
      fullName: '이름',
      firstName: '이름',
      lastName: '성',
      status: '상태',
      disabled: '비활성화',
      phoneNumber: '전화 번호',
      role: '역할',
      createdAt: '생성 날짜',
      updatedAt: '업데이트 날짜',
      roleUser: '역할 / 사용자',
      roles: '역할',
      createdAtRange: '생성 날짜',
      password: '암호',
      rememberMe: '자동 로그인',
    },
    enabled: '활성화',
    disabled: '비활성화',
    validations: {
      // eslint-disable-next-line
      email: '${value} 이메일이 잘못되었습니다',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      '쉼표 문자를 사용하여 여러 엔티티를 분리하십시오.',
    fields: {
      id: 'Id',
      timestampRange: '기간',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: '동작',
      values: '값',
      timestamp: '날짜',
      createdByEmail: '사용자 이메일',
    },
  },
  settings: {
    title: '설정',
    menu: '설정',
    save: {
      success:
        '설정이 성공적으로 저장되었습니다. 변경 사항을 적용하려면 페이지가 {0} 초 후에 다시로드됩니다.',
    },
    fields: {
      theme: '테마',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: '홈',
    message: `이 페이지는 데모 목적으로 만 가짜 데이터를 사용합니다. frontend/view/home/HomePage.js 에서 편집 할 수 있습니다.`,
    charts: {
      day: '일',
      red: '빨강',
      green: '초록',
      yellow: '노랑',
      grey: '회색',
      blue: '파랑',
      orange: '주황',
      months: {
        1: '1월',
        2: '2월',
        3: '3월',
        4: '4월',
        5: '5월',
        6: '6월',
        7: '7월',
      },
      eating: '먹기',
      drinking: '마시기',
      sleeping: '잠자기',
      designing: '설계',
      coding: '코딩',
      cycling: '사이클링',
      running: '러닝',
      customer: '고객',
    },
  },
  errors: {
    backToHome: '홈으로',
    403: `죄송합니다.이 페이지에 액세스 할 수 없습니다`,
    404: '방문한 페이지가 없습니다.',
    500: '서버에서 오류를보고합니다',
    forbidden: {
      message: '금지',
    },
    validation: {
      message: '오류가 발생했습니다',
    },
    defaultErrorMessage: '작업, 오류가 발생했습니다.',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} 올바르지 않습니다.',
      required: '${path} 필수 항목입니다.',
      oneOf:
        '${path} 다음 값 중 하나 여야합니다. ${values}',
      notOneOf:
        '${path} 다음 값 중 하나가 아니어야합니다. ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path}는 정확히 ${length}자 여야합니다.',
      min: '${path}는 ${min}자 이상이어야합니다.',
      max: '${path}는 최대 ${max}자 여야합니다.',
      matches:
        '${path}는 다음과 일치해야합니다 : "${regex}"',
      email: '${path}는 유효한 이메일이어야합니다.',
      url: '${path} 유효한 URL이어야합니다',
      trim: '${path} 잘라낸 문자열이어야 합니다.',
      lowercase: '${path} 소문자이어야 합니다.',
      uppercase: '${path} 대문자이어야 합니다.',
      selected: '${path} 선택해야 합니다.',
    },
    number: {
      min:
        '${path}은(는) ${min}보다 크거나 같아야 합니다.',
      max: '${path}은(는) ${max}보다 작거나 같아야 합니다.',
      lessThan: '${path}은(는) ${less}보다 작아야 합니다.',
      moreThan: '${path}은(는) ${more}보다 커야 합니다.',
      notEqual: '${path}은(는) ${notEqual}과(와) 같아야 합니다.',
      positive: '${path}은(는) 양수여야 합니다.',
      negative: '${path}은(는) 음수여야 합니다.',
      integer: '${path}은(는) 정수여야 합니다.',
    },
    date: {
      min: '${path} 필드는 ${min}보다 커야 합니다.',
      max: '${path} 필드는 ${max}보다 작아야 합니다.',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} 필드는 객체 형태에 키를 지정할 수 없습니다',
    },
    array: {
      min: '${path} 필드에는 최소 ${min} 개의 항목이 있어야합니다',
      max:
        '${path} 필드는 ${max} 항목보다 작거나 같아야합니다.',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: '업로드',
    image: '이미지를 업로드해야합니다',
    size: '파일이 너무 큽니다. 허용되는 최대 크기는 {0}입니다.',
    formats: `잘못된 형식입니다. '{0}'이어야합니다.`,
  },
  importer: {
    line: '선',
    status: '상태',
    pending: '대기 중',
    imported: 'Imported',
    error: '오류',
    total: `{0}을(를) 가져왔습니다. {1}이(가) 보류 중이고 {2}에 오류가 있습니다.`,
    importedMessage: `{1}의 {0} 처리.`,
    noNavigateAwayMessage:
      '이 페이지를 벗어나지 않으면 가져 오기가 중지됩니다.',
    completed: {
      success:
        '가져오기가 완료되었습니다. 모든 행을 성공적으로 가져왔습니다.',
      someErrors:
        '처리가 완료되었지만 일부 행을 가져올 수 없습니다.',
      allErrors: '가져오지 못했습니다. 올바른 행이 없습니다.',
    },
    form: {
      downloadTemplate: '템플릿을 다운로드합니다.',
      hint:
        '계속하려면 파일을 클릭하거나 이 영역으로 끕니다.',
    },
    list: {
      discardConfirm:
        '확실하나요? 가져오지 않은 데이터가 손실됩니다.',
    },
    errors: {
      invalidFileEmpty: '파일이 비어 있습니다.',
      invalidFileExcel:
        'Excel(.xlsx) 파일만 허용됩니다.',
      invalidFileUpload:
        '파일이 잘못되었습니다. 템플릿의 마지막 버전을 사용하고 있는지 확인합니다.',
      importHashRequired: '해시를 가져와야 합니다.',
      importHashExistent: '데이터를 이미 가져왔습니다.',
    },
  },

  autocomplete: {
    loading: '로딩...',
  },

  imagesViewer: {
    noImage: '이미지가 없음',
  },

  firebaseErrors: {
    'auth/user-disabled': '귀하의 계정이 비활성화되었습니다',
    'auth/user-not-found': `죄송합니다, 귀하의 자격 증명을 인식하지 못합니다`,
    'auth/wrong-password': `죄송합니다, 귀하의 자격 증명을 인식하지 못합니다`,
    'auth/weak-password': '이 비밀번호는 너무 약합니다',
    'auth/email-already-in-use': '이메일이 이미 사용 중입니다',
    'auth/invalid-email': '유효한 이메일을 제공하십시오',
    'auth/account-exists-with-different-credential':
      '이메일이 이미 다른 인증 방법으로 사용되고 있습니다.',
    'auth/credential-already-in-use':
      '자격 증명이 이미 사용 중입니다',
  },
};

export default ko;
