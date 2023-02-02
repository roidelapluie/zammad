import * as Types from '../../../../../../shared/graphql/types';

import gql from 'graphql-tag';
export const TicketArticleAttributesFragmentDoc = gql`
    fragment ticketArticleAttributes on TicketArticle {
  id
  internalId
  from {
    raw
    parsed {
      name
      emailAddress
    }
  }
  messageId
  to {
    raw
    parsed {
      name
      emailAddress
    }
  }
  cc {
    raw
    parsed {
      name
      emailAddress
    }
  }
  subject
  replyTo {
    raw
    parsed {
      name
      emailAddress
    }
  }
  messageId
  messageIdMd5
  inReplyTo
  contentType
  references
  attachmentsWithoutInline {
    internalId
    name
    size
    type
    preferences
  }
  preferences
  bodyWithUrls
  internal
  createdAt
  createdBy {
    id
    fullname
    firstname
    lastname
    authorizations {
      provider
      uid
      username
    }
  }
  type {
    name
    communication
  }
  sender {
    name
  }
  securityState {
    encryptionMessage
    encryptionSuccess
    signingMessage
    signingSuccess
    type
  }
}
    `;