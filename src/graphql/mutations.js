/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTbxStaffCompany = /* GraphQL */ `
  mutation CreateTbxStaffCompany(
    $input: CreateTbxStaffCompanyInput!
    $condition: ModeltbxStaffCompanyConditionInput
  ) {
    createTbxStaffCompany(input: $input, condition: $condition) {
      id
      staffId
      companyId
      createdAt
      updatedAt
      staff {
        id
        name
        authType
        companyAsStaff {
          nextToken
        }
        outgoingMessage {
          nextToken
        }
        incomingMessage {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        companyAsOwner {
          nextToken
        }
      }
      company {
        id
        name
        address
        addressCity
        addressCountry
        phone
        type
        ownerId
        blockchain
        balance
        staffs {
          nextToken
        }
        products {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        owner {
          id
          name
          authType
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateTbxStaffCompany = /* GraphQL */ `
  mutation UpdateTbxStaffCompany(
    $input: UpdateTbxStaffCompanyInput!
    $condition: ModeltbxStaffCompanyConditionInput
  ) {
    updateTbxStaffCompany(input: $input, condition: $condition) {
      id
      staffId
      companyId
      createdAt
      updatedAt
      staff {
        id
        name
        authType
        companyAsStaff {
          nextToken
        }
        outgoingMessage {
          nextToken
        }
        incomingMessage {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        companyAsOwner {
          nextToken
        }
      }
      company {
        id
        name
        address
        addressCity
        addressCountry
        phone
        type
        ownerId
        blockchain
        balance
        staffs {
          nextToken
        }
        products {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        owner {
          id
          name
          authType
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteTbxStaffCompany = /* GraphQL */ `
  mutation DeleteTbxStaffCompany(
    $input: DeleteTbxStaffCompanyInput!
    $condition: ModeltbxStaffCompanyConditionInput
  ) {
    deleteTbxStaffCompany(input: $input, condition: $condition) {
      id
      staffId
      companyId
      createdAt
      updatedAt
      staff {
        id
        name
        authType
        companyAsStaff {
          nextToken
        }
        outgoingMessage {
          nextToken
        }
        incomingMessage {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        companyAsOwner {
          nextToken
        }
      }
      company {
        id
        name
        address
        addressCity
        addressCountry
        phone
        type
        ownerId
        blockchain
        balance
        staffs {
          nextToken
        }
        products {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        owner {
          id
          name
          authType
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createTbxProduct = /* GraphQL */ `
  mutation CreateTbxProduct(
    $input: CreateTbxProductInput!
    $condition: ModeltbxProductConditionInput
  ) {
    createTbxProduct(input: $input, condition: $condition) {
      id
      description
      life
      companyId
      blockchain
      lots {
        items {
          id
          productId
          blockchain
          amount
          unit
          manufactureDate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      company {
        id
        name
        address
        addressCity
        addressCountry
        phone
        type
        ownerId
        blockchain
        balance
        staffs {
          nextToken
        }
        products {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        owner {
          id
          name
          authType
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateTbxProduct = /* GraphQL */ `
  mutation UpdateTbxProduct(
    $input: UpdateTbxProductInput!
    $condition: ModeltbxProductConditionInput
  ) {
    updateTbxProduct(input: $input, condition: $condition) {
      id
      description
      life
      companyId
      blockchain
      lots {
        items {
          id
          productId
          blockchain
          amount
          unit
          manufactureDate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      company {
        id
        name
        address
        addressCity
        addressCountry
        phone
        type
        ownerId
        blockchain
        balance
        staffs {
          nextToken
        }
        products {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        owner {
          id
          name
          authType
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteTbxProduct = /* GraphQL */ `
  mutation DeleteTbxProduct(
    $input: DeleteTbxProductInput!
    $condition: ModeltbxProductConditionInput
  ) {
    deleteTbxProduct(input: $input, condition: $condition) {
      id
      description
      life
      companyId
      blockchain
      lots {
        items {
          id
          productId
          blockchain
          amount
          unit
          manufactureDate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      company {
        id
        name
        address
        addressCity
        addressCountry
        phone
        type
        ownerId
        blockchain
        balance
        staffs {
          nextToken
        }
        products {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        owner {
          id
          name
          authType
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createTbxLot = /* GraphQL */ `
  mutation CreateTbxLot(
    $input: CreateTbxLotInput!
    $condition: ModeltbxLotConditionInput
  ) {
    createTbxLot(input: $input, condition: $condition) {
      id
      productId
      blockchain
      amount
      unit
      manufactureDate
      product {
        id
        description
        life
        companyId
        blockchain
        lots {
          nextToken
        }
        createdAt
        updatedAt
        company {
          id
          name
          address
          addressCity
          addressCountry
          phone
          type
          ownerId
          blockchain
          balance
          createdAt
          updatedAt
        }
      }
      items {
        items {
          id
          qrcode
          lotId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTbxLot = /* GraphQL */ `
  mutation UpdateTbxLot(
    $input: UpdateTbxLotInput!
    $condition: ModeltbxLotConditionInput
  ) {
    updateTbxLot(input: $input, condition: $condition) {
      id
      productId
      blockchain
      amount
      unit
      manufactureDate
      product {
        id
        description
        life
        companyId
        blockchain
        lots {
          nextToken
        }
        createdAt
        updatedAt
        company {
          id
          name
          address
          addressCity
          addressCountry
          phone
          type
          ownerId
          blockchain
          balance
          createdAt
          updatedAt
        }
      }
      items {
        items {
          id
          qrcode
          lotId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTbxLot = /* GraphQL */ `
  mutation DeleteTbxLot(
    $input: DeleteTbxLotInput!
    $condition: ModeltbxLotConditionInput
  ) {
    deleteTbxLot(input: $input, condition: $condition) {
      id
      productId
      blockchain
      amount
      unit
      manufactureDate
      product {
        id
        description
        life
        companyId
        blockchain
        lots {
          nextToken
        }
        createdAt
        updatedAt
        company {
          id
          name
          address
          addressCity
          addressCountry
          phone
          type
          ownerId
          blockchain
          balance
          createdAt
          updatedAt
        }
      }
      items {
        items {
          id
          qrcode
          lotId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTbxItem = /* GraphQL */ `
  mutation CreateTbxItem(
    $input: CreateTbxItemInput!
    $condition: ModeltbxItemConditionInput
  ) {
    createTbxItem(input: $input, condition: $condition) {
      id
      qrcode
      lotId
      lot {
        id
        productId
        blockchain
        amount
        unit
        manufactureDate
        product {
          id
          description
          life
          companyId
          blockchain
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      timeline {
        items {
          id
          fromUserId
          toUserId
          itemId
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTbxItem = /* GraphQL */ `
  mutation UpdateTbxItem(
    $input: UpdateTbxItemInput!
    $condition: ModeltbxItemConditionInput
  ) {
    updateTbxItem(input: $input, condition: $condition) {
      id
      qrcode
      lotId
      lot {
        id
        productId
        blockchain
        amount
        unit
        manufactureDate
        product {
          id
          description
          life
          companyId
          blockchain
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      timeline {
        items {
          id
          fromUserId
          toUserId
          itemId
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTbxItem = /* GraphQL */ `
  mutation DeleteTbxItem(
    $input: DeleteTbxItemInput!
    $condition: ModeltbxItemConditionInput
  ) {
    deleteTbxItem(input: $input, condition: $condition) {
      id
      qrcode
      lotId
      lot {
        id
        productId
        blockchain
        amount
        unit
        manufactureDate
        product {
          id
          description
          life
          companyId
          blockchain
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      timeline {
        items {
          id
          fromUserId
          toUserId
          itemId
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTbxMessage = /* GraphQL */ `
  mutation CreateTbxMessage(
    $input: CreateTbxMessageInput!
    $condition: ModeltbxMessageConditionInput
  ) {
    createTbxMessage(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      date
      type
      status
      companyName
      itemName
      createdAt
      updatedAt
    }
  }
`;
export const updateTbxMessage = /* GraphQL */ `
  mutation UpdateTbxMessage(
    $input: UpdateTbxMessageInput!
    $condition: ModeltbxMessageConditionInput
  ) {
    updateTbxMessage(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      date
      type
      status
      companyName
      itemName
      createdAt
      updatedAt
    }
  }
`;
export const deleteTbxMessage = /* GraphQL */ `
  mutation DeleteTbxMessage(
    $input: DeleteTbxMessageInput!
    $condition: ModeltbxMessageConditionInput
  ) {
    deleteTbxMessage(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      date
      type
      status
      companyName
      itemName
      createdAt
      updatedAt
    }
  }
`;
export const createTbxTimeline = /* GraphQL */ `
  mutation CreateTbxTimeline(
    $input: CreateTbxTimelineInput!
    $condition: ModeltbxTimelineConditionInput
  ) {
    createTbxTimeline(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      itemId
      date
      item {
        id
        qrcode
        lotId
        lot {
          id
          productId
          blockchain
          amount
          unit
          manufactureDate
          createdAt
          updatedAt
        }
        timeline {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTbxTimeline = /* GraphQL */ `
  mutation UpdateTbxTimeline(
    $input: UpdateTbxTimelineInput!
    $condition: ModeltbxTimelineConditionInput
  ) {
    updateTbxTimeline(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      itemId
      date
      item {
        id
        qrcode
        lotId
        lot {
          id
          productId
          blockchain
          amount
          unit
          manufactureDate
          createdAt
          updatedAt
        }
        timeline {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTbxTimeline = /* GraphQL */ `
  mutation DeleteTbxTimeline(
    $input: DeleteTbxTimelineInput!
    $condition: ModeltbxTimelineConditionInput
  ) {
    deleteTbxTimeline(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      itemId
      date
      item {
        id
        qrcode
        lotId
        lot {
          id
          productId
          blockchain
          amount
          unit
          manufactureDate
          createdAt
          updatedAt
        }
        timeline {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTbxPayment = /* GraphQL */ `
  mutation CreateTbxPayment(
    $input: CreateTbxPaymentInput!
    $condition: ModeltbxPaymentConditionInput
  ) {
    createTbxPayment(input: $input, condition: $condition) {
      id
      type
      userId
      companyId
      productId
      lotId
      amount
      refBlockchain
      previousBalance
      currentBalance
      createdAt
      updatedAt
    }
  }
`;
export const updateTbxPayment = /* GraphQL */ `
  mutation UpdateTbxPayment(
    $input: UpdateTbxPaymentInput!
    $condition: ModeltbxPaymentConditionInput
  ) {
    updateTbxPayment(input: $input, condition: $condition) {
      id
      type
      userId
      companyId
      productId
      lotId
      amount
      refBlockchain
      previousBalance
      currentBalance
      createdAt
      updatedAt
    }
  }
`;
export const deleteTbxPayment = /* GraphQL */ `
  mutation DeleteTbxPayment(
    $input: DeleteTbxPaymentInput!
    $condition: ModeltbxPaymentConditionInput
  ) {
    deleteTbxPayment(input: $input, condition: $condition) {
      id
      type
      userId
      companyId
      productId
      lotId
      amount
      refBlockchain
      previousBalance
      currentBalance
      createdAt
      updatedAt
    }
  }
`;
export const createTbxUser = /* GraphQL */ `
  mutation CreateTbxUser(
    $input: CreateTbxUserInput!
    $condition: ModeltbxUserConditionInput
  ) {
    createTbxUser(input: $input, condition: $condition) {
      id
      name
      authType
      companyAsStaff {
        items {
          id
          staffId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingMessage {
        items {
          id
          fromUserId
          toUserId
          date
          type
          status
          companyName
          itemName
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingMessage {
        items {
          id
          fromUserId
          toUserId
          date
          type
          status
          companyName
          itemName
          createdAt
          updatedAt
        }
        nextToken
      }
      payments {
        items {
          id
          type
          userId
          companyId
          productId
          lotId
          amount
          refBlockchain
          previousBalance
          currentBalance
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      companyAsOwner {
        items {
          id
          name
          address
          addressCity
          addressCountry
          phone
          type
          ownerId
          blockchain
          balance
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateTbxUser = /* GraphQL */ `
  mutation UpdateTbxUser(
    $input: UpdateTbxUserInput!
    $condition: ModeltbxUserConditionInput
  ) {
    updateTbxUser(input: $input, condition: $condition) {
      id
      name
      authType
      companyAsStaff {
        items {
          id
          staffId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingMessage {
        items {
          id
          fromUserId
          toUserId
          date
          type
          status
          companyName
          itemName
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingMessage {
        items {
          id
          fromUserId
          toUserId
          date
          type
          status
          companyName
          itemName
          createdAt
          updatedAt
        }
        nextToken
      }
      payments {
        items {
          id
          type
          userId
          companyId
          productId
          lotId
          amount
          refBlockchain
          previousBalance
          currentBalance
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      companyAsOwner {
        items {
          id
          name
          address
          addressCity
          addressCountry
          phone
          type
          ownerId
          blockchain
          balance
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteTbxUser = /* GraphQL */ `
  mutation DeleteTbxUser(
    $input: DeleteTbxUserInput!
    $condition: ModeltbxUserConditionInput
  ) {
    deleteTbxUser(input: $input, condition: $condition) {
      id
      name
      authType
      companyAsStaff {
        items {
          id
          staffId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingMessage {
        items {
          id
          fromUserId
          toUserId
          date
          type
          status
          companyName
          itemName
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingMessage {
        items {
          id
          fromUserId
          toUserId
          date
          type
          status
          companyName
          itemName
          createdAt
          updatedAt
        }
        nextToken
      }
      payments {
        items {
          id
          type
          userId
          companyId
          productId
          lotId
          amount
          refBlockchain
          previousBalance
          currentBalance
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      companyAsOwner {
        items {
          id
          name
          address
          addressCity
          addressCountry
          phone
          type
          ownerId
          blockchain
          balance
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTbxCompany = /* GraphQL */ `
  mutation CreateTbxCompany(
    $input: CreateTbxCompanyInput!
    $condition: ModeltbxCompanyConditionInput
  ) {
    createTbxCompany(input: $input, condition: $condition) {
      id
      name
      address
      addressCity
      addressCountry
      phone
      type
      ownerId
      blockchain
      balance
      staffs {
        items {
          id
          staffId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      products {
        items {
          id
          description
          life
          companyId
          blockchain
          createdAt
          updatedAt
        }
        nextToken
      }
      payments {
        items {
          id
          type
          userId
          companyId
          productId
          lotId
          amount
          refBlockchain
          previousBalance
          currentBalance
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner {
        id
        name
        authType
        companyAsStaff {
          nextToken
        }
        outgoingMessage {
          nextToken
        }
        incomingMessage {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        companyAsOwner {
          nextToken
        }
      }
    }
  }
`;
export const updateTbxCompany = /* GraphQL */ `
  mutation UpdateTbxCompany(
    $input: UpdateTbxCompanyInput!
    $condition: ModeltbxCompanyConditionInput
  ) {
    updateTbxCompany(input: $input, condition: $condition) {
      id
      name
      address
      addressCity
      addressCountry
      phone
      type
      ownerId
      blockchain
      balance
      staffs {
        items {
          id
          staffId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      products {
        items {
          id
          description
          life
          companyId
          blockchain
          createdAt
          updatedAt
        }
        nextToken
      }
      payments {
        items {
          id
          type
          userId
          companyId
          productId
          lotId
          amount
          refBlockchain
          previousBalance
          currentBalance
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner {
        id
        name
        authType
        companyAsStaff {
          nextToken
        }
        outgoingMessage {
          nextToken
        }
        incomingMessage {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        companyAsOwner {
          nextToken
        }
      }
    }
  }
`;
export const deleteTbxCompany = /* GraphQL */ `
  mutation DeleteTbxCompany(
    $input: DeleteTbxCompanyInput!
    $condition: ModeltbxCompanyConditionInput
  ) {
    deleteTbxCompany(input: $input, condition: $condition) {
      id
      name
      address
      addressCity
      addressCountry
      phone
      type
      ownerId
      blockchain
      balance
      staffs {
        items {
          id
          staffId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      products {
        items {
          id
          description
          life
          companyId
          blockchain
          createdAt
          updatedAt
        }
        nextToken
      }
      payments {
        items {
          id
          type
          userId
          companyId
          productId
          lotId
          amount
          refBlockchain
          previousBalance
          currentBalance
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner {
        id
        name
        authType
        companyAsStaff {
          nextToken
        }
        outgoingMessage {
          nextToken
        }
        incomingMessage {
          nextToken
        }
        payments {
          nextToken
        }
        createdAt
        updatedAt
        companyAsOwner {
          nextToken
        }
      }
    }
  }
`;
