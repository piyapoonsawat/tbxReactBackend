/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTbxStaffCompany = /* GraphQL */ `
  query GetTbxStaffCompany($id: ID!) {
    getTbxStaffCompany(id: $id) {
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
export const listTbxStaffCompanys = /* GraphQL */ `
  query ListTbxStaffCompanys(
    $filter: ModeltbxStaffCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxStaffCompanys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        staffId
        companyId
        createdAt
        updatedAt
        staff {
          id
          name
          authType
          createdAt
          updatedAt
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getTbxProduct = /* GraphQL */ `
  query GetTbxProduct($id: ID!) {
    getTbxProduct(id: $id) {
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
export const listTbxProducts = /* GraphQL */ `
  query ListTbxProducts(
    $filter: ModeltbxProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTbxLot = /* GraphQL */ `
  query GetTbxLot($id: ID!) {
    getTbxLot(id: $id) {
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
export const listTbxLots = /* GraphQL */ `
  query ListTbxLots(
    $filter: ModeltbxLotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxLots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTbxItem = /* GraphQL */ `
  query GetTbxItem($id: ID!) {
    getTbxItem(id: $id) {
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
export const listTbxItems = /* GraphQL */ `
  query ListTbxItems(
    $filter: ModeltbxItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTbxMessage = /* GraphQL */ `
  query GetTbxMessage($id: ID!) {
    getTbxMessage(id: $id) {
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
export const listTbxMessages = /* GraphQL */ `
  query ListTbxMessages(
    $filter: ModeltbxMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTbxTimeline = /* GraphQL */ `
  query GetTbxTimeline($id: ID!) {
    getTbxTimeline(id: $id) {
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
export const listTbxTimelines = /* GraphQL */ `
  query ListTbxTimelines(
    $filter: ModeltbxTimelineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxTimelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fromUserId
        toUserId
        itemId
        date
        item {
          id
          qrcode
          lotId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTbxPayment = /* GraphQL */ `
  query GetTbxPayment($id: ID!) {
    getTbxPayment(id: $id) {
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
export const listTbxPayments = /* GraphQL */ `
  query ListTbxPayments(
    $filter: ModeltbxPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listTbxUsers = /* GraphQL */ `
  query ListTbxUsers(
    $filter: ModeltbxUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTbxUser = /* GraphQL */ `
  query GetTbxUser($id: ID!) {
    getTbxUser(id: $id) {
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
export const listTbxCompanys = /* GraphQL */ `
  query ListTbxCompanys(
    $filter: ModeltbxCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTbxCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getTbxCompany = /* GraphQL */ `
  query GetTbxCompany($id: ID!) {
    getTbxCompany(id: $id) {
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
