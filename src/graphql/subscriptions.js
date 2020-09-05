/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTbxStaffCompany = /* GraphQL */ `
  subscription OnCreateTbxStaffCompany {
    onCreateTbxStaffCompany {
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
export const onUpdateTbxStaffCompany = /* GraphQL */ `
  subscription OnUpdateTbxStaffCompany {
    onUpdateTbxStaffCompany {
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
export const onDeleteTbxStaffCompany = /* GraphQL */ `
  subscription OnDeleteTbxStaffCompany {
    onDeleteTbxStaffCompany {
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
export const onCreateTbxProduct = /* GraphQL */ `
  subscription OnCreateTbxProduct {
    onCreateTbxProduct {
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
export const onUpdateTbxProduct = /* GraphQL */ `
  subscription OnUpdateTbxProduct {
    onUpdateTbxProduct {
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
export const onDeleteTbxProduct = /* GraphQL */ `
  subscription OnDeleteTbxProduct {
    onDeleteTbxProduct {
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
export const onCreateTbxLot = /* GraphQL */ `
  subscription OnCreateTbxLot {
    onCreateTbxLot {
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
export const onUpdateTbxLot = /* GraphQL */ `
  subscription OnUpdateTbxLot {
    onUpdateTbxLot {
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
export const onDeleteTbxLot = /* GraphQL */ `
  subscription OnDeleteTbxLot {
    onDeleteTbxLot {
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
export const onCreateTbxItem = /* GraphQL */ `
  subscription OnCreateTbxItem {
    onCreateTbxItem {
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
export const onUpdateTbxItem = /* GraphQL */ `
  subscription OnUpdateTbxItem {
    onUpdateTbxItem {
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
export const onDeleteTbxItem = /* GraphQL */ `
  subscription OnDeleteTbxItem {
    onDeleteTbxItem {
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
export const onCreateTbxMessage = /* GraphQL */ `
  subscription OnCreateTbxMessage {
    onCreateTbxMessage {
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
export const onUpdateTbxMessage = /* GraphQL */ `
  subscription OnUpdateTbxMessage {
    onUpdateTbxMessage {
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
export const onDeleteTbxMessage = /* GraphQL */ `
  subscription OnDeleteTbxMessage {
    onDeleteTbxMessage {
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
export const onCreateTbxTimeline = /* GraphQL */ `
  subscription OnCreateTbxTimeline {
    onCreateTbxTimeline {
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
export const onUpdateTbxTimeline = /* GraphQL */ `
  subscription OnUpdateTbxTimeline {
    onUpdateTbxTimeline {
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
export const onDeleteTbxTimeline = /* GraphQL */ `
  subscription OnDeleteTbxTimeline {
    onDeleteTbxTimeline {
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
export const onCreateTbxPayment = /* GraphQL */ `
  subscription OnCreateTbxPayment {
    onCreateTbxPayment {
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
export const onUpdateTbxPayment = /* GraphQL */ `
  subscription OnUpdateTbxPayment {
    onUpdateTbxPayment {
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
export const onDeleteTbxPayment = /* GraphQL */ `
  subscription OnDeleteTbxPayment {
    onDeleteTbxPayment {
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
export const onCreateTbxUser = /* GraphQL */ `
  subscription OnCreateTbxUser {
    onCreateTbxUser {
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
export const onUpdateTbxUser = /* GraphQL */ `
  subscription OnUpdateTbxUser {
    onUpdateTbxUser {
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
export const onDeleteTbxUser = /* GraphQL */ `
  subscription OnDeleteTbxUser {
    onDeleteTbxUser {
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
export const onCreateTbxCompany = /* GraphQL */ `
  subscription OnCreateTbxCompany($ownerId: String) {
    onCreateTbxCompany(ownerId: $ownerId) {
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
export const onUpdateTbxCompany = /* GraphQL */ `
  subscription OnUpdateTbxCompany($ownerId: String) {
    onUpdateTbxCompany(ownerId: $ownerId) {
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
export const onDeleteTbxCompany = /* GraphQL */ `
  subscription OnDeleteTbxCompany($ownerId: String) {
    onDeleteTbxCompany(ownerId: $ownerId) {
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
