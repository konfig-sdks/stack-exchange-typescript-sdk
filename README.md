<div align="left">

[![Visit Stack exchange](./header.png)](https://api.stackexchange.com)

# [Stack exchange](https://api.stackexchange.com)<a id="stack-exchange"></a>

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`stackexchange.accessToken.deauthenticateList`](#stackexchangeaccesstokendeauthenticatelist)
  * [`stackexchange.accessToken.invalidateList`](#stackexchangeaccesstokeninvalidatelist)
  * [`stackexchange.accessToken.listPropertiesForMultipleTokens`](#stackexchangeaccesstokenlistpropertiesformultipletokens)
  * [`stackexchange.answer.getCommentsByIds`](#stackexchangeanswergetcommentsbyids)
  * [`stackexchange.answer.getList`](#stackexchangeanswergetlist)
  * [`stackexchange.answer.getListByIds`](#stackexchangeanswergetlistbyids)
  * [`stackexchange.answer.getListByQuestionIds`](#stackexchangeanswergetlistbyquestionids)
  * [`stackexchange.answer.getListOfUnansweredQuestions`](#stackexchangeanswergetlistofunansweredquestions)
  * [`stackexchange.answer.getUserAnswersList`](#stackexchangeanswergetuseranswerslist)
  * [`stackexchange.answer.getUserTopAnswers`](#stackexchangeanswergetusertopanswers)
  * [`stackexchange.answer.getUserTopTags`](#stackexchangeanswergetusertoptags)
  * [`stackexchange.answer.listNoAnswerQuestions`](#stackexchangeanswerlistnoanswerquestions)
  * [`stackexchange.answer.listNoAnswerQuestions_0`](#stackexchangeanswerlistnoanswerquestions_0)
  * [`stackexchange.answer.tagTopAnswerers`](#stackexchangeanswertagtopanswerers)
  * [`stackexchange.answer.userUnansweredQuestionsGet`](#stackexchangeansweruserunansweredquestionsget)
  * [`stackexchange.associated.getUserAccounts`](#stackexchangeassociatedgetuseraccounts)
  * [`stackexchange.badge.getAllNamedBadges`](#stackexchangebadgegetallnamedbadges)
  * [`stackexchange.badge.getBadgesByIds`](#stackexchangebadgegetbadgesbyids)
  * [`stackexchange.badge.getRecentAwardedBadges`](#stackexchangebadgegetrecentawardedbadges)
  * [`stackexchange.badge.getRecentAwardedRecipients`](#stackexchangebadgegetrecentawardedrecipients)
  * [`stackexchange.badge.getUserBadges`](#stackexchangebadgegetuserbadges)
  * [`stackexchange.badge.listBadges`](#stackexchangebadgelistbadges)
  * [`stackexchange.badge.listTagsBadges`](#stackexchangebadgelisttagsbadges)
  * [`stackexchange.comment.deleteAction`](#stackexchangecommentdeleteaction)
  * [`stackexchange.comment.editExisting`](#stackexchangecommenteditexisting)
  * [`stackexchange.comment.getCommentsByIds`](#stackexchangecommentgetcommentsbyids)
  * [`stackexchange.comment.getCommentsList`](#stackexchangecommentgetcommentslist)
  * [`stackexchange.comment.getReplyList`](#stackexchangecommentgetreplylist)
  * [`stackexchange.comment.listComments`](#stackexchangecommentlistcomments)
  * [`stackexchange.comment.listOwnedComments`](#stackexchangecommentlistownedcomments)
  * [`stackexchange.edit.getUserSuggestedEdits`](#stackexchangeeditgetusersuggestededits)
  * [`stackexchange.edit.listSuggestedEdits`](#stackexchangeeditlistsuggestededits)
  * [`stackexchange.edit.listSuggestedEdits_0`](#stackexchangeeditlistsuggestededits_0)
  * [`stackexchange.error.generateError`](#stackexchangeerrorgenerateerror)
  * [`stackexchange.error.listErrors`](#stackexchangeerrorlisterrors)
  * [`stackexchange.event.listEvents`](#stackexchangeeventlistevents)
  * [`stackexchange.favorite.getUserFavorites`](#stackexchangefavoritegetuserfavorites)
  * [`stackexchange.filter.createFilter`](#stackexchangefiltercreatefilter)
  * [`stackexchange.filter.getFilterDetailsByIds`](#stackexchangefiltergetfilterdetailsbyids)
  * [`stackexchange.information.getStatistics`](#stackexchangeinformationgetstatistics)
  * [`stackexchange.information.getTagsList`](#stackexchangeinformationgettagslist)
  * [`stackexchange.mention.userCommentsList`](#stackexchangementionusercommentslist)
  * [`stackexchange.merge.getAccountMergeList`](#stackexchangemergegetaccountmergelist)
  * [`stackexchange.message.getInboxItems`](#stackexchangemessagegetinboxitems)
  * [`stackexchange.message.getUnreadItems`](#stackexchangemessagegetunreaditems)
  * [`stackexchange.message.listInboxItems`](#stackexchangemessagelistinboxitems)
  * [`stackexchange.notification.getUnreadItemsInInbox`](#stackexchangenotificationgetunreaditemsininbox)
  * [`stackexchange.notification.getUnreadItemsInInbox_0`](#stackexchangenotificationgetunreaditemsininbox_0)
  * [`stackexchange.notification.getUserNotifications`](#stackexchangenotificationgetusernotifications)
  * [`stackexchange.notification.getUserNotificationsList`](#stackexchangenotificationgetusernotificationslist)
  * [`stackexchange.notification.getUserUnreadNotifications`](#stackexchangenotificationgetuserunreadnotifications)
  * [`stackexchange.permission.getUserWritePermissions`](#stackexchangepermissiongetuserwritepermissions)
  * [`stackexchange.post.addComment`](#stackexchangepostaddcomment)
  * [`stackexchange.post.commentsByIdsGet`](#stackexchangepostcommentsbyidsget)
  * [`stackexchange.post.getAllPosts`](#stackexchangepostgetallposts)
  * [`stackexchange.post.getPostRevisionsByIds`](#stackexchangepostgetpostrevisionsbyids)
  * [`stackexchange.post.getPostsByIds`](#stackexchangepostgetpostsbyids)
  * [`stackexchange.post.listSuggestedEdits`](#stackexchangepostlistsuggestededits)
  * [`stackexchange.privilege.getEarnableList`](#stackexchangeprivilegegetearnablelist)
  * [`stackexchange.privilege.getUserPrivileges`](#stackexchangeprivilegegetuserprivileges)
  * [`stackexchange.query.similarQuestionsSearch`](#stackexchangequerysimilarquestionssearch)
  * [`stackexchange.query.siteQuestionsSearch`](#stackexchangequerysitequestionssearch)
  * [`stackexchange.question.getAllQuestions`](#stackexchangequestiongetallquestions)
  * [`stackexchange.question.getByIds`](#stackexchangequestiongetbyids)
  * [`stackexchange.question.getLinkedQuestions`](#stackexchangequestiongetlinkedquestions)
  * [`stackexchange.question.getTimelineEvents`](#stackexchangequestiongettimelineevents)
  * [`stackexchange.question.getUnacceptedList`](#stackexchangequestiongetunacceptedlist)
  * [`stackexchange.question.getUserFeatured`](#stackexchangequestiongetuserfeatured)
  * [`stackexchange.question.getUserQuestionsList`](#stackexchangequestiongetuserquestionslist)
  * [`stackexchange.question.listFeaturedQuestions`](#stackexchangequestionlistfeaturedquestions)
  * [`stackexchange.question.listRelatedQuestions`](#stackexchangequestionlistrelatedquestions)
  * [`stackexchange.reputation.getFullHistory`](#stackexchangereputationgetfullhistory)
  * [`stackexchange.reputation.getUserReputationChanges`](#stackexchangereputationgetuserreputationchanges)
  * [`stackexchange.reputation.getUserReputationHistory`](#stackexchangereputationgetuserreputationhistory)
  * [`stackexchange.revision.listRevisionsByIds`](#stackexchangerevisionlistrevisionsbyids)
  * [`stackexchange.search.siteQuestionsAdvancedSearch`](#stackexchangesearchsitequestionsadvancedsearch)
  * [`stackexchange.site.listSites`](#stackexchangesitelistsites)
  * [`stackexchange.tag.getFaqQuestions`](#stackexchangetaggetfaqquestions)
  * [`stackexchange.tag.getModeratorOnlyTagsList`](#stackexchangetaggetmoderatoronlytagslist)
  * [`stackexchange.tag.getRelatedTags`](#stackexchangetaggetrelatedtags)
  * [`stackexchange.tag.getTagInfo`](#stackexchangetaggettaginfo)
  * [`stackexchange.tag.getTagWikis`](#stackexchangetaggettagwikis)
  * [`stackexchange.tag.getTopAskersByPeriod`](#stackexchangetaggettopaskersbyperiod)
  * [`stackexchange.tag.getUserTagsList`](#stackexchangetaggetusertagslist)
  * [`stackexchange.tag.getUserTopQuestions`](#stackexchangetaggetusertopquestions)
  * [`stackexchange.tag.getUserTopTagsList`](#stackexchangetaggetusertoptagslist)
  * [`stackexchange.tag.listRequiredTags`](#stackexchangetaglistrequiredtags)
  * [`stackexchange.tag.listSynonyms`](#stackexchangetaglistsynonyms)
  * [`stackexchange.tag.synonymsList`](#stackexchangetagsynonymslist)
  * [`stackexchange.timeline.getUserTimeline`](#stackexchangetimelinegetusertimeline)
  * [`stackexchange.user.getAssociatedAccounts`](#stackexchangeusergetassociatedaccounts)
  * [`stackexchange.user.getCommentsByIds`](#stackexchangeusergetcommentsbyids)
  * [`stackexchange.user.getFavoritesList`](#stackexchangeusergetfavoriteslist)
  * [`stackexchange.user.getFeaturedQuestions`](#stackexchangeusergetfeaturedquestions)
  * [`stackexchange.user.getFullReputationHistory`](#stackexchangeusergetfullreputationhistory)
  * [`stackexchange.user.getInboxItems`](#stackexchangeusergetinboxitems)
  * [`stackexchange.user.getInboxUnread`](#stackexchangeusergetinboxunread)
  * [`stackexchange.user.getNotificationsList`](#stackexchangeusergetnotificationslist)
  * [`stackexchange.user.getPrivilegesList`](#stackexchangeusergetprivilegeslist)
  * [`stackexchange.user.getQuestionsByUserIds`](#stackexchangeusergetquestionsbyuserids)
  * [`stackexchange.user.getReputationChanges`](#stackexchangeusergetreputationchanges)
  * [`stackexchange.user.getReputationHistory`](#stackexchangeusergetreputationhistory)
  * [`stackexchange.user.getSuggestedEditsByIds`](#stackexchangeusergetsuggestededitsbyids)
  * [`stackexchange.user.getTags`](#stackexchangeusergettags)
  * [`stackexchange.user.getTopQuestionTags`](#stackexchangeusergettopquestiontags)
  * [`stackexchange.user.getTopQuestionsByTags`](#stackexchangeusergettopquestionsbytags)
  * [`stackexchange.user.getUnacceptedQuestions`](#stackexchangeusergetunacceptedquestions)
  * [`stackexchange.user.getUnansweredQuestions`](#stackexchangeusergetunansweredquestions)
  * [`stackexchange.user.getUnreadNotifications`](#stackexchangeusergetunreadnotifications)
  * [`stackexchange.user.getUser`](#stackexchangeusergetuser)
  * [`stackexchange.user.getUserAnswersList`](#stackexchangeusergetuseranswerslist)
  * [`stackexchange.user.getUserCommentsByIdsAndToid`](#stackexchangeusergetusercommentsbyidsandtoid)
  * [`stackexchange.user.getUserProfilesByIds`](#stackexchangeusergetuserprofilesbyids)
  * [`stackexchange.user.getUserTimelineByIds`](#stackexchangeusergetusertimelinebyids)
  * [`stackexchange.user.getUserTopAnswerTags`](#stackexchangeusergetusertopanswertags)
  * [`stackexchange.user.getUserTopAnswers`](#stackexchangeusergetusertopanswers)
  * [`stackexchange.user.getWritePermissions`](#stackexchangeusergetwritepermissions)
  * [`stackexchange.user.listAccountMerges`](#stackexchangeuserlistaccountmerges)
  * [`stackexchange.user.listElectedModeratorUsers`](#stackexchangeuserlistelectedmoderatorusers)
  * [`stackexchange.user.listModeratorUsers`](#stackexchangeuserlistmoderatorusers)
  * [`stackexchange.user.listNoAnswerQuestions`](#stackexchangeuserlistnoanswerquestions)
  * [`stackexchange.user.listUserBadges`](#stackexchangeuserlistuserbadges)
  * [`stackexchange.user.listUsers`](#stackexchangeuserlistusers)
  * [`stackexchange.user.mentionedCommentsList`](#stackexchangeusermentionedcommentslist)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Stack%20Exchange&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { StackExchange } from "stack-exchange-typescript-sdk";

const stackexchange = new StackExchange({
  // Defining the base path is optional and defaults to https://api.stackexchange.com/2.0
  // basePath: "https://api.stackexchange.com/2.0",
  accessToken: "ACCESS_TOKEN",
});

const deauthenticateListResponse =
  await stackexchange.accessToken.deauthenticateList({
    accessTokens: "accessTokens_example",
  });

console.log(deauthenticateListResponse);
```

## Reference<a id="reference"></a>


### `stackexchange.accessToken.deauthenticateList`<a id="stackexchangeaccesstokendeauthenticatelist"></a>

Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deauthenticateListResponse =
  await stackexchange.accessToken.deauthenticateList({
    accessTokens: "accessTokens_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accessTokens: `string`<a id="accesstokens-string"></a>

String list (semicolon delimited).

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AccessTokensInner](./models/access-tokens-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps/{accessTokens}/de-authenticate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.accessToken.invalidateList`<a id="stackexchangeaccesstokeninvalidatelist"></a>

Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invalidateListResponse = await stackexchange.accessToken.invalidateList({
  accessTokens: "accessTokens_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accessTokens: `string`<a id="accesstokens-string"></a>

String list (semicolon delimited).

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AccessTokensInner](./models/access-tokens-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access-tokens/{accessTokens}/invalidate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.accessToken.listPropertiesForMultipleTokens`<a id="stackexchangeaccesstokenlistpropertiesformultipletokens"></a>

Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPropertiesForMultipleTokensResponse =
  await stackexchange.accessToken.listPropertiesForMultipleTokens({
    accessTokens: "accessTokens_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accessTokens: `string`<a id="accesstokens-string"></a>

String list (semicolon delimited).

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AccessTokensInner](./models/access-tokens-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access-tokens/{accessTokens}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getCommentsByIds`<a id="stackexchangeanswergetcommentsbyids"></a>

Gets the comments on a set of answers.
 
If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentsByIdsResponse = await stackexchange.answer.getCommentsByIds({
  ids: "ids_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/answers/{ids}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getList`<a id="stackexchangeanswergetlist"></a>

Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await stackexchange.answer.getList({
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getListByIds`<a id="stackexchangeanswergetlistbyids"></a>

Gets the set of answers identified by ids.
 
This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByIdsResponse = await stackexchange.answer.getListByIds({
  ids: "ids_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/answers/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getListByQuestionIds`<a id="stackexchangeanswergetlistbyquestionids"></a>

Gets the answers to a set of questions identified in id.
 
This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListByQuestionIdsResponse =
  await stackexchange.answer.getListByQuestionIds({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/{ids}/answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getListOfUnansweredQuestions`<a id="stackexchangeanswergetlistofunansweredquestions"></a>

Returns questions the site considers to be unanswered.
 
Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
Compare with /questions/no-answers.
 
This method corresponds roughly with the unanswered tab.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListOfUnansweredQuestionsResponse =
  await stackexchange.answer.getListOfUnansweredQuestions({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/unanswered` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getUserAnswersList`<a id="stackexchangeanswergetuseranswerslist"></a>

Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAnswersListResponse =
  await stackexchange.answer.getUserAnswersList({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getUserTopAnswers`<a id="stackexchangeanswergetusertopanswers"></a>

Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTopAnswersResponse = await stackexchange.answer.getUserTopAnswers({
  tags: "tags_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/tags/{tags}/top-answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.getUserTopTags`<a id="stackexchangeanswergetusertoptags"></a>

Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTopTagsResponse = await stackexchange.answer.getUserTopTags({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TopTagObjectsInner](./models/top-tag-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/top-answer-tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.listNoAnswerQuestions`<a id="stackexchangeanswerlistnoanswerquestions"></a>

Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listNoAnswerQuestionsResponse =
  await stackexchange.answer.listNoAnswerQuestions({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/questions/no-answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.listNoAnswerQuestions_0`<a id="stackexchangeanswerlistnoanswerquestions_0"></a>

Returns questions which have received no answers.
 
Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
 
This method corresponds roughly with the this site tab.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listNoAnswerQuestions_0Response =
  await stackexchange.answer.listNoAnswerQuestions_0({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/no-answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.tagTopAnswerers`<a id="stackexchangeanswertagtopanswerers"></a>

Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tagTopAnswerersResponse = await stackexchange.answer.tagTopAnswerers({
  tag: "tag_example",
  period: "all_time",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

##### period: `'all_time' | 'month'`<a id="period-all_time--month"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagScoreObjectsInner](./models/tag-score-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag}/top-answerers/{period}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.answer.userUnansweredQuestionsGet`<a id="stackexchangeansweruserunansweredquestionsget"></a>

Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userUnansweredQuestionsGetResponse =
  await stackexchange.answer.userUnansweredQuestionsGet({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/questions/unanswered` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.associated.getUserAccounts`<a id="stackexchangeassociatedgetuseraccounts"></a>

Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAccountsResponse = await stackexchange.associated.getUserAccounts(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NetworkUsersInner](./models/network-users-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/associated` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.getAllNamedBadges`<a id="stackexchangebadgegetallnamedbadges"></a>

Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllNamedBadgesResponse = await stackexchange.badge.getAllNamedBadges({
  order: "desc",
  sort: "rank",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = rank => string sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = rank => string sort = name => string 

##### sort: `'rank' | 'name'`<a id="sort-rank--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/badges/name` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.getBadgesByIds`<a id="stackexchangebadgegetbadgesbyids"></a>

Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBadgesByIdsResponse = await stackexchange.badge.getBadgesByIds({
  ids: "ids_example",
  order: "desc",
  sort: "rank",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = rank => string sort = name => string sort = type => string 

##### min: `string`<a id="min-string"></a>

sort = rank => string sort = name => string sort = type => string 

##### sort: `'rank' | 'name' | 'type'`<a id="sort-rank--name--type"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/badges/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.getRecentAwardedBadges`<a id="stackexchangebadgegetrecentawardedbadges"></a>

Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentAwardedBadgesResponse =
  await stackexchange.badge.getRecentAwardedBadges({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/badges/recipients` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.getRecentAwardedRecipients`<a id="stackexchangebadgegetrecentawardedrecipients"></a>

Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentAwardedRecipientsResponse =
  await stackexchange.badge.getRecentAwardedRecipients({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/badges/{ids}/recipients` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.getUserBadges`<a id="stackexchangebadgegetuserbadges"></a>

Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserBadgesResponse = await stackexchange.badge.getUserBadges({
  order: "desc",
  sort: "rank",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = rank => string sort = name => string sort = type => string 

##### min: `string`<a id="min-string"></a>

sort = rank => string sort = name => string sort = type => string 

##### sort: `'rank' | 'name' | 'type'`<a id="sort-rank--name--type"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/badges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.listBadges`<a id="stackexchangebadgelistbadges"></a>

Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBadgesResponse = await stackexchange.badge.listBadges({
  order: "desc",
  sort: "rank",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = rank => string sort = name => string sort = type => string 

##### min: `string`<a id="min-string"></a>

sort = rank => string sort = name => string sort = type => string 

##### sort: `'rank' | 'name' | 'type'`<a id="sort-rank--name--type"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/badges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.badge.listTagsBadges`<a id="stackexchangebadgelisttagsbadges"></a>

Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTagsBadgesResponse = await stackexchange.badge.listTagsBadges({
  order: "desc",
  sort: "rank",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = rank => string sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = rank => string sort = name => string 

##### sort: `'rank' | 'name'`<a id="sort-rank--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/badges/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.deleteAction`<a id="stackexchangecommentdeleteaction"></a>

Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteActionResponse = await stackexchange.comment.deleteAction({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### preview: `boolean`<a id="preview-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{id}/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.editExisting`<a id="stackexchangecommenteditexisting"></a>

Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editExistingResponse = await stackexchange.comment.editExisting({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### body: `string`<a id="body-string"></a>

##### preview: `boolean`<a id="preview-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CreatedComment](./models/created-comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{id}/edit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.getCommentsByIds`<a id="stackexchangecommentgetcommentsbyids"></a>

Gets the comments identified in id.
 
This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentsByIdsResponse = await stackexchange.comment.getCommentsByIds({
  ids: "ids_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.getCommentsList`<a id="stackexchangecommentgetcommentslist"></a>

Gets the comments on a question.
 
If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentsListResponse = await stackexchange.comment.getCommentsList({
  ids: "ids_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/{ids}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.getReplyList`<a id="stackexchangecommentgetreplylist"></a>

Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReplyListResponse = await stackexchange.comment.getReplyList({
  toId: 1,
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### toId: `number`<a id="toid-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/comments/{toId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.listComments`<a id="stackexchangecommentlistcomments"></a>

Gets all the comments on the site.
 
If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
 
If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCommentsResponse = await stackexchange.comment.listComments({
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.comment.listOwnedComments`<a id="stackexchangecommentlistownedcomments"></a>

Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOwnedCommentsResponse = await stackexchange.comment.listOwnedComments(
  {
    order: "desc",
    sort: "creation",
    site: "site_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.edit.getUserSuggestedEdits`<a id="stackexchangeeditgetusersuggestededits"></a>

Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserSuggestedEditsResponse =
  await stackexchange.edit.getUserSuggestedEdits({
    order: "desc",
    sort: "creation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### sort: `'creation' | 'approval' | 'rejection'`<a id="sort-creation--approval--rejection"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[SuggestedEditsInner](./models/suggested-edits-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/suggested-edits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.edit.listSuggestedEdits`<a id="stackexchangeeditlistsuggestededits"></a>

Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSuggestedEditsResponse = await stackexchange.edit.listSuggestedEdits({
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### sort: `'creation' | 'approval' | 'rejection'`<a id="sort-creation--approval--rejection"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[SuggestedEditsInner](./models/suggested-edits-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/suggested-edits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.edit.listSuggestedEdits_0`<a id="stackexchangeeditlistsuggestededits_0"></a>

Returns suggested edits identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of suggested-edits.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSuggestedEdits_0Response =
  await stackexchange.edit.listSuggestedEdits_0({
    ids: "ids_example",
    order: "desc",
    sort: "creation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### sort: `'creation' | 'approval' | 'rejection'`<a id="sort-creation--approval--rejection"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[SuggestedEditsInner](./models/suggested-edits-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/suggested-edits/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.error.generateError`<a id="stackexchangeerrorgenerateerror"></a>

This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateErrorResponse = await stackexchange.error.generateError({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ModelError](./models/model-error.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/errors/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.error.listErrors`<a id="stackexchangeerrorlisterrors"></a>

Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listErrorsResponse = await stackexchange.error.listErrors({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ErrorsInner](./models/errors-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/errors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.event.listEvents`<a id="stackexchangeeventlistevents"></a>

Returns a stream of events that have occurred on the site.
 
The API considers the following "events":
 - posting a question
 - posting an answer
 - posting a comment
 - editing a post
 - creating a user


  


 
Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
 
It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
 
This method returns a list of events.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEventsResponse = await stackexchange.event.listEvents({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### since: `number`<a id="since-number"></a>

Unix date.

#### 🔄 Return<a id="🔄-return"></a>

[EventsInner](./models/events-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.favorite.getUserFavorites`<a id="stackexchangefavoritegetuserfavorites"></a>

Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserFavoritesResponse = await stackexchange.favorite.getUserFavorites({
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = added => date 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = added => date 

##### sort: `'activity' | 'creation' | 'votes' | 'added'`<a id="sort-activity--creation--votes--added"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/favorites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.filter.createFilter`<a id="stackexchangefiltercreatefilter"></a>

Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFilterResponse = await stackexchange.filter.createFilter({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### base: `string`<a id="base-string"></a>

##### exclude: `string`<a id="exclude-string"></a>

String list (semicolon delimited).

##### include: `string`<a id="include-string"></a>

String list (semicolon delimited).

##### unsafe: `boolean`<a id="unsafe-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SingleFilter](./models/single-filter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/filters/create` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.filter.getFilterDetailsByIds`<a id="stackexchangefiltergetfilterdetailsbyids"></a>

Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilterDetailsByIdsResponse =
  await stackexchange.filter.getFilterDetailsByIds({
    filters: "filters_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `string`<a id="filters-string"></a>

String list (semicolon delimited).

#### 🔄 Return<a id="🔄-return"></a>

[FiltersInner](./models/filters-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/filters/{filters}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.information.getStatistics`<a id="stackexchangeinformationgetstatistics"></a>

Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatisticsResponse = await stackexchange.information.getStatistics({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

#### 🔄 Return<a id="🔄-return"></a>

[InfoObject](./models/info-object.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.information.getTagsList`<a id="stackexchangeinformationgettagslist"></a>

Returns the tags found on a site.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagsListResponse = await stackexchange.information.getTagsList({
  order: "desc",
  sort: "popular",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### sort: `'popular' | 'activity' | 'name'`<a id="sort-popular--activity--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.mention.userCommentsList`<a id="stackexchangementionusercommentslist"></a>

Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userCommentsListResponse = await stackexchange.mention.userCommentsList({
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/mentioned` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.merge.getAccountMergeList`<a id="stackexchangemergegetaccountmergelist"></a>

Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountMergeListResponse =
  await stackexchange.merge.getAccountMergeList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AccountMergeInner](./models/account-merge-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/merges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.message.getInboxItems`<a id="stackexchangemessagegetinboxitems"></a>

Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInboxItemsResponse = await stackexchange.message.getInboxItems({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInner](./models/inbox-items-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/inbox` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.message.getUnreadItems`<a id="stackexchangemessagegetunreaditems"></a>

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnreadItemsResponse = await stackexchange.message.getUnreadItems({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### since: `number`<a id="since-number"></a>

Unix date.

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInner](./models/inbox-items-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inbox/unread` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.message.listInboxItems`<a id="stackexchangemessagelistinboxitems"></a>

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInboxItemsResponse = await stackexchange.message.listInboxItems({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInner](./models/inbox-items-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inbox` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.notification.getUnreadItemsInInbox`<a id="stackexchangenotificationgetunreaditemsininbox"></a>

Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnreadItemsInInboxResponse =
  await stackexchange.notification.getUnreadItemsInInbox({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### since: `number`<a id="since-number"></a>

Unix date.

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInner](./models/inbox-items-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/inbox/unread` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.notification.getUnreadItemsInInbox_0`<a id="stackexchangenotificationgetunreaditemsininbox_0"></a>

Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnreadItemsInInbox_0Response =
  await stackexchange.notification.getUnreadItemsInInbox_0({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsInner](./models/notifications-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/notifications/unread` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.notification.getUserNotifications`<a id="stackexchangenotificationgetusernotifications"></a>

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserNotificationsResponse =
  await stackexchange.notification.getUserNotifications({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsInner](./models/notifications-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.notification.getUserNotificationsList`<a id="stackexchangenotificationgetusernotificationslist"></a>

Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserNotificationsListResponse =
  await stackexchange.notification.getUserNotificationsList({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsInner](./models/notifications-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/notifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.notification.getUserUnreadNotifications`<a id="stackexchangenotificationgetuserunreadnotifications"></a>

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserUnreadNotificationsResponse =
  await stackexchange.notification.getUserUnreadNotifications({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsInner](./models/notifications-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/unread` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.permission.getUserWritePermissions`<a id="stackexchangepermissiongetuserwritepermissions"></a>

Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserWritePermissionsResponse =
  await stackexchange.permission.getUserWritePermissions({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[WritePermissionsInner](./models/write-permissions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/write-permissions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.post.addComment`<a id="stackexchangepostaddcomment"></a>

Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCommentResponse = await stackexchange.post.addComment({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### body: `string`<a id="body-string"></a>

##### preview: `boolean`<a id="preview-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CreatedComment](./models/created-comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{id}/comments/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.post.commentsByIdsGet`<a id="stackexchangepostcommentsbyidsget"></a>

Gets the comments on the posts identified in ids, regardless of the type of the posts.
 
This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const commentsByIdsGetResponse = await stackexchange.post.commentsByIdsGet({
  ids: "ids_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{ids}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.post.getAllPosts`<a id="stackexchangepostgetallposts"></a>

Fetches all posts (questions and answers) on the site.
 
In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
 
Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of posts.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPostsResponse = await stackexchange.post.getAllPosts({
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[PostsInner](./models/posts-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.post.getPostRevisionsByIds`<a id="stackexchangepostgetpostrevisionsbyids"></a>

Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPostRevisionsByIdsResponse =
  await stackexchange.post.getPostRevisionsByIds({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[RevisionsInner](./models/revisions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{ids}/revisions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.post.getPostsByIds`<a id="stackexchangepostgetpostsbyids"></a>

Fetches a set of posts by ids.
 
This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of posts.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPostsByIdsResponse = await stackexchange.post.getPostsByIds({
  ids: "ids_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[PostsInner](./models/posts-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.post.listSuggestedEdits`<a id="stackexchangepostlistsuggestededits"></a>

Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.


 
This method returns a list of suggested-edits.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSuggestedEditsResponse = await stackexchange.post.listSuggestedEdits({
  ids: "ids_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### sort: `'creation' | 'approval' | 'rejection'`<a id="sort-creation--approval--rejection"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[SuggestedEditsInner](./models/suggested-edits-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{ids}/suggested-edits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.privilege.getEarnableList`<a id="stackexchangeprivilegegetearnablelist"></a>

Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEarnableListResponse = await stackexchange.privilege.getEarnableList({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[PrivilegesInner](./models/privileges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/privileges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.privilege.getUserPrivileges`<a id="stackexchangeprivilegegetuserprivileges"></a>

Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPrivilegesResponse =
  await stackexchange.privilege.getUserPrivileges({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[PrivilegesInner](./models/privileges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/privileges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.query.similarQuestionsSearch`<a id="stackexchangequerysimilarquestionssearch"></a>

Returns questions which are similar to a hypothetical one based on a title and tag combination.
 
This method is roughly equivalent to a site's related questions suggestion on the ask page.
 
This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
 
Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
 
If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const similarQuestionsSearchResponse =
  await stackexchange.query.similarQuestionsSearch({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 

##### sort: `'activity' | 'creation' | 'votes' | 'relevance'`<a id="sort-activity--creation--votes--relevance"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### nottagged: `string`<a id="nottagged-string"></a>

String list (semicolon delimited).

##### title: `string`<a id="title-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/similar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.query.siteQuestionsSearch`<a id="stackexchangequerysitequestionssearch"></a>

Searches a site for any questions which fit the given criteria.
 
This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
 
At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
 
tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const siteQuestionsSearchResponse =
  await stackexchange.query.siteQuestionsSearch({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 

##### sort: `'activity' | 'creation' | 'votes' | 'relevance'`<a id="sort-activity--creation--votes--relevance"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### intitle: `string`<a id="intitle-string"></a>

##### nottagged: `string`<a id="nottagged-string"></a>

String list (semicolon delimited).

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getAllQuestions`<a id="stackexchangequestiongetallquestions"></a>

Gets all the questions on the site.
 
This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - hot - by the formula ordering the hot tab Does not accept min or max
 - week - by the formula ordering the week tab Does not accept min or max
 - month - by the formula ordering the month tab Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllQuestionsResponse = await stackexchange.question.getAllQuestions({
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = hot => none sort = week => none sort = month => none sort = relevance => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = hot => none sort = week => none sort = month => none sort = relevance => none 

##### sort: `'activity' | 'creation' | 'votes' | 'hot' | 'week' | 'month' | 'relevance'`<a id="sort-activity--creation--votes--hot--week--month--relevance"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getByIds`<a id="stackexchangequestiongetbyids"></a>

Returns the questions identified in {ids}.
 
This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdsResponse = await stackexchange.question.getByIds({
  ids: "ids_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getLinkedQuestions`<a id="stackexchangequestiongetlinkedquestions"></a>

Gets questions which link to those questions identified in {ids}.
 
This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
 
A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLinkedQuestionsResponse =
  await stackexchange.question.getLinkedQuestions({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = rank => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = rank => none 

##### sort: `'activity' | 'creation' | 'votes' | 'rank'`<a id="sort-activity--creation--votes--rank"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/{ids}/linked` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getTimelineEvents`<a id="stackexchangequestiongettimelineevents"></a>

Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimelineEventsResponse =
  await stackexchange.question.getTimelineEvents({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionTimelineEventsInner](./models/question-timeline-events-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/{ids}/timeline` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getUnacceptedList`<a id="stackexchangequestiongetunacceptedlist"></a>

Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnacceptedListResponse =
  await stackexchange.question.getUnacceptedList({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/questions/unaccepted` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getUserFeatured`<a id="stackexchangequestiongetuserfeatured"></a>

Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserFeaturedResponse = await stackexchange.question.getUserFeatured({
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/questions/featured` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.getUserQuestionsList`<a id="stackexchangequestiongetuserquestionslist"></a>

Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserQuestionsListResponse =
  await stackexchange.question.getUserQuestionsList({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/questions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.listFeaturedQuestions`<a id="stackexchangequestionlistfeaturedquestions"></a>

Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFeaturedQuestionsResponse =
  await stackexchange.question.listFeaturedQuestions({
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/featured` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.question.listRelatedQuestions`<a id="stackexchangequestionlistrelatedquestions"></a>

Returns questions that the site considers related to those identified in {ids}.
 
The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRelatedQuestionsResponse =
  await stackexchange.question.listRelatedQuestions({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = rank => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = rank => none 

##### sort: `'activity' | 'creation' | 'votes' | 'rank'`<a id="sort-activity--creation--votes--rank"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/questions/{ids}/related` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.reputation.getFullHistory`<a id="stackexchangereputationgetfullhistory"></a>

Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".


 
This method returns a list of reputation_history.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFullHistoryResponse = await stackexchange.reputation.getFullHistory({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ReputationHistoryInner](./models/reputation-history-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/reputation-history/full` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.reputation.getUserReputationChanges`<a id="stackexchangereputationgetuserreputationchanges"></a>

Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserReputationChangesResponse =
  await stackexchange.reputation.getUserReputationChanges({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ReputationChangesInner](./models/reputation-changes-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/reputation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.reputation.getUserReputationHistory`<a id="stackexchangereputationgetuserreputationhistory"></a>

Returns user's public reputation history.
 
This method returns a list of reputation_history.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserReputationHistoryResponse =
  await stackexchange.reputation.getUserReputationHistory({
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ReputationHistoryInner](./models/reputation-history-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/reputation-history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.revision.listRevisionsByIds`<a id="stackexchangerevisionlistrevisionsbyids"></a>

Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRevisionsByIdsResponse =
  await stackexchange.revision.listRevisionsByIds({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Guid list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[RevisionsInner](./models/revisions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/revisions/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.search.siteQuestionsAdvancedSearch`<a id="stackexchangesearchsitequestionsadvancedsearch"></a>

Searches a site for any questions which fit the given criteria.
 
Search criteria are expressed using the following parameters:
  - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
 - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
 - answers - the minimum number of answers returned questions must have.
 - body - text which must appear in returned questions' bodies.
 - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
 - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
 - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
 - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
 - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
 - title - text which must appear in returned questions' titles.
 - user - the id of the user who must own the questions returned.
 - url - a url which must be contained in a post, may include a wildcard.
 - views - the minimum number of views returned questions must have.
 - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.


  
At least one additional parameter must be set if nottagged is set, for performance reasons.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const siteQuestionsAdvancedSearchResponse =
  await stackexchange.search.siteQuestionsAdvancedSearch({
    order: "desc",
    sort: "activity",
    site: "site_example",
    accepted: "true",
    closed: "true",
    migrated: "true",
    notice: "true",
    wiki: "true",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### tagged: `string`<a id="tagged-string"></a>

String list (semicolon delimited).

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 

##### sort: `'activity' | 'creation' | 'votes' | 'relevance'`<a id="sort-activity--creation--votes--relevance"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### accepted: `'true' | 'false'`<a id="accepted-true--false"></a>

##### answers: `number`<a id="answers-number"></a>

##### body: `string`<a id="body-string"></a>

##### closed: `'true' | 'false'`<a id="closed-true--false"></a>

##### migrated: `'true' | 'false'`<a id="migrated-true--false"></a>

##### notice: `'true' | 'false'`<a id="notice-true--false"></a>

##### nottagged: `string`<a id="nottagged-string"></a>

String list (semicolon delimited).

##### q: `string`<a id="q-string"></a>

##### title: `string`<a id="title-string"></a>

##### url: `string`<a id="url-string"></a>

##### user: `number`<a id="user-number"></a>

##### views: `number`<a id="views-number"></a>

##### wiki: `'true' | 'false'`<a id="wiki-true--false"></a>

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search/advanced` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.site.listSites`<a id="stackexchangesitelistsites"></a>

Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSitesResponse = await stackexchange.site.listSites({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInnerSite](./models/inbox-items-inner-site.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getFaqQuestions`<a id="stackexchangetaggetfaqquestions"></a>

Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFaqQuestionsResponse = await stackexchange.tag.getFaqQuestions({
  tags: "tags_example",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tags}/faq` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getModeratorOnlyTagsList`<a id="stackexchangetaggetmoderatoronlytagslist"></a>

Returns the tags found on a site that only moderators can use.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getModeratorOnlyTagsListResponse =
  await stackexchange.tag.getModeratorOnlyTagsList({
    order: "desc",
    sort: "popular",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### sort: `'popular' | 'activity' | 'name'`<a id="sort-popular--activity--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/moderator-only` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getRelatedTags`<a id="stackexchangetaggetrelatedtags"></a>

Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRelatedTagsResponse = await stackexchange.tag.getRelatedTags({
  tags: "tags_example",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tags}/related` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getTagInfo`<a id="stackexchangetaggettaginfo"></a>

Returns tag objects representing the tags in {tags} found on the site.
 
This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagInfoResponse = await stackexchange.tag.getTagInfo({
  tags: "tags_example",
  order: "desc",
  sort: "popular",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### sort: `'popular' | 'activity' | 'name'`<a id="sort-popular--activity--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tags}/info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getTagWikis`<a id="stackexchangetaggettagwikis"></a>

Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagWikisResponse = await stackexchange.tag.getTagWikis({
  tags: "tags_example",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagWikisInner](./models/tag-wikis-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tags}/wikis` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getTopAskersByPeriod`<a id="stackexchangetaggettopaskersbyperiod"></a>

Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopAskersByPeriodResponse =
  await stackexchange.tag.getTopAskersByPeriod({
    tag: "tag_example",
    period: "all_time",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

##### period: `'all_time' | 'month'`<a id="period-all_time--month"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagScoreObjectsInner](./models/tag-score-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag}/top-askers/{period}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getUserTagsList`<a id="stackexchangetaggetusertagslist"></a>

Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTagsListResponse = await stackexchange.tag.getUserTagsList({
  order: "desc",
  sort: "popular",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### sort: `'popular' | 'activity' | 'name'`<a id="sort-popular--activity--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getUserTopQuestions`<a id="stackexchangetaggetusertopquestions"></a>

Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTopQuestionsResponse = await stackexchange.tag.getUserTopQuestions(
  {
    tags: "tags_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = hot => none sort = week => none sort = month => none sort = relevance => none 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = hot => none sort = week => none sort = month => none sort = relevance => none 

##### sort: `'activity' | 'creation' | 'votes' | 'hot' | 'week' | 'month' | 'relevance'`<a id="sort-activity--creation--votes--hot--week--month--relevance"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/tags/{tags}/top-questions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.getUserTopTagsList`<a id="stackexchangetaggetusertoptagslist"></a>

Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTopTagsListResponse = await stackexchange.tag.getUserTopTagsList({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TopTagObjectsInner](./models/top-tag-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/top-question-tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.listRequiredTags`<a id="stackexchangetaglistrequiredtags"></a>

Returns the tags found on a site that fulfill required tag constraints on questions.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRequiredTagsResponse = await stackexchange.tag.listRequiredTags({
  order: "desc",
  sort: "popular",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### sort: `'popular' | 'activity' | 'name'`<a id="sort-popular--activity--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/required` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.listSynonyms`<a id="stackexchangetaglistsynonyms"></a>

Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
 
{tags} can contain up to 20 individual tags per request.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of tag synonyms.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSynonymsResponse = await stackexchange.tag.listSynonyms({
  tags: "tags_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = applied => number sort = activity => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = applied => number sort = activity => date 

##### sort: `'creation' | 'applied' | 'activity'`<a id="sort-creation--applied--activity"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagSynonymsInner](./models/tag-synonyms-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tags}/synonyms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.tag.synonymsList`<a id="stackexchangetagsynonymslist"></a>

Returns all tag synonyms found a site.
 
When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of tag_synonyms.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const synonymsListResponse = await stackexchange.tag.synonymsList({
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = applied => number sort = activity => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = applied => number sort = activity => date 

##### sort: `'creation' | 'applied' | 'activity'`<a id="sort-creation--applied--activity"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagSynonymsInner](./models/tag-synonyms-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/synonyms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.timeline.getUserTimeline`<a id="stackexchangetimelinegetusertimeline"></a>

Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTimelineResponse = await stackexchange.timeline.getUserTimeline({
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[UserTimelineObjectsInner](./models/user-timeline-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/timeline` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getAssociatedAccounts`<a id="stackexchangeusergetassociatedaccounts"></a>

Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssociatedAccountsResponse =
  await stackexchange.user.getAssociatedAccounts({
    ids: "ids_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NetworkUsersInner](./models/network-users-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/associated` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getCommentsByIds`<a id="stackexchangeusergetcommentsbyids"></a>

Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentsByIdsResponse = await stackexchange.user.getCommentsByIds({
  ids: "ids_example",
  order: "desc",
  sort: "creation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getFavoritesList`<a id="stackexchangeusergetfavoriteslist"></a>

Get the questions that users in {ids} have favorited.
 
This method is effectively a view onto a user's favorites tab.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - added - when the user favorited the question
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFavoritesListResponse = await stackexchange.user.getFavoritesList({
  ids: "ids_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = added => date 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number sort = added => date 

##### sort: `'activity' | 'creation' | 'votes' | 'added'`<a id="sort-activity--creation--votes--added"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/favorites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getFeaturedQuestions`<a id="stackexchangeusergetfeaturedquestions"></a>

Gets the questions on which the users in {ids} have active bounties.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFeaturedQuestionsResponse =
  await stackexchange.user.getFeaturedQuestions({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/questions/featured` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getFullReputationHistory`<a id="stackexchangeusergetfullreputationhistory"></a>

Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFullReputationHistoryResponse =
  await stackexchange.user.getFullReputationHistory({
    id: 1,
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ReputationHistoryInner](./models/reputation-history-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/reputation-history/full` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getInboxItems`<a id="stackexchangeusergetinboxitems"></a>

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInboxItemsResponse = await stackexchange.user.getInboxItems({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInner](./models/inbox-items-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/inbox` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getInboxUnread`<a id="stackexchangeusergetinboxunread"></a>

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInboxUnreadResponse = await stackexchange.user.getInboxUnread({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

##### since: `number`<a id="since-number"></a>

Unix date.

#### 🔄 Return<a id="🔄-return"></a>

[InboxItemsInner](./models/inbox-items-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/inbox/unread` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getNotificationsList`<a id="stackexchangeusergetnotificationslist"></a>

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNotificationsListResponse =
  await stackexchange.user.getNotificationsList({
    id: 1,
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsInner](./models/notifications-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/notifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getPrivilegesList`<a id="stackexchangeusergetprivilegeslist"></a>

Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrivilegesListResponse = await stackexchange.user.getPrivilegesList({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[PrivilegesInner](./models/privileges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/privileges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getQuestionsByUserIds`<a id="stackexchangeusergetquestionsbyuserids"></a>

Gets the questions asked by the users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQuestionsByUserIdsResponse =
  await stackexchange.user.getQuestionsByUserIds({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/questions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getReputationChanges`<a id="stackexchangeusergetreputationchanges"></a>

Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReputationChangesResponse =
  await stackexchange.user.getReputationChanges({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ReputationChangesInner](./models/reputation-changes-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/reputation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getReputationHistory`<a id="stackexchangeusergetreputationhistory"></a>

Returns users' public reputation history.
 
This method returns a list of reputation_history.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReputationHistoryResponse =
  await stackexchange.user.getReputationHistory({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[ReputationHistoryInner](./models/reputation-history-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/reputation-history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getSuggestedEditsByIds`<a id="stackexchangeusergetsuggestededitsbyids"></a>

Returns the suggested edits a users in {ids} have submitted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of suggested-edits.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSuggestedEditsByIdsResponse =
  await stackexchange.user.getSuggestedEditsByIds({
    ids: "ids_example",
    order: "desc",
    sort: "creation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = approval => date sort = rejection => date 

##### sort: `'creation' | 'approval' | 'rejection'`<a id="sort-creation--approval--rejection"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[SuggestedEditsInner](./models/suggested-edits-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/suggested-edits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getTags`<a id="stackexchangeusergettags"></a>

Returns the tags the users identified in {ids} have been active in.
 
This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of tags.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagsResponse = await stackexchange.user.getTags({
  ids: "ids_example",
  order: "desc",
  sort: "popular",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### min: `string`<a id="min-string"></a>

sort = popular => number sort = activity => date sort = name => string 

##### sort: `'popular' | 'activity' | 'name'`<a id="sort-popular--activity--name"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TagsInner](./models/tags-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getTopQuestionTags`<a id="stackexchangeusergettopquestiontags"></a>

Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopQuestionTagsResponse = await stackexchange.user.getTopQuestionTags({
  id: 1,
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TopTagObjectsInner](./models/top-tag-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/top-question-tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getTopQuestionsByTags`<a id="stackexchangeusergettopquestionsbytags"></a>

Returns the top 30 questions a user has asked with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopQuestionsByTagsResponse =
  await stackexchange.user.getTopQuestionsByTags({
    id: 1,
    tags: "tags_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/tags/{tags}/top-questions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUnacceptedQuestions`<a id="stackexchangeusergetunacceptedquestions"></a>

Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
 
Questions returned by this method have answers, but the owner has not opted to accept any of them.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnacceptedQuestionsResponse =
  await stackexchange.user.getUnacceptedQuestions({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/questions/unaccepted` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUnansweredQuestions`<a id="stackexchangeusergetunansweredquestions"></a>

Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
 
These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
 
To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnansweredQuestionsResponse =
  await stackexchange.user.getUnansweredQuestions({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/questions/unanswered` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUnreadNotifications`<a id="stackexchangeusergetunreadnotifications"></a>

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnreadNotificationsResponse =
  await stackexchange.user.getUnreadNotifications({
    id: 1,
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsInner](./models/notifications-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/notifications/unread` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUser`<a id="stackexchangeusergetuser"></a>

Returns the user associated with the passed access_token.
 
This method returns a user.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserResponse = await stackexchange.user.getUser({
  order: "desc",
  sort: "reputation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### min: `string`<a id="min-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### sort: `'reputation' | 'creation' | 'name' | 'modified'`<a id="sort-reputation--creation--name--modified"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUserAnswersList`<a id="stackexchangeusergetuseranswerslist"></a>

Returns the answers the users in {ids} have posted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAnswersListResponse = await stackexchange.user.getUserAnswersList({
  ids: "ids_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUserCommentsByIdsAndToid`<a id="stackexchangeusergetusercommentsbyidsandtoid"></a>

Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
 
This method is useful for extracting conversations, especially over time or across multiple posts.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserCommentsByIdsAndToidResponse =
  await stackexchange.user.getUserCommentsByIdsAndToid({
    ids: "ids_example",
    toid: 1,
    order: "desc",
    sort: "creation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### toid: `number`<a id="toid-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/comments/{toid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUserProfilesByIds`<a id="stackexchangeusergetuserprofilesbyids"></a>

Gets the users identified in ids in {ids}.
 
Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of users.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserProfilesByIdsResponse =
  await stackexchange.user.getUserProfilesByIds({
    ids: "ids_example",
    order: "desc",
    sort: "reputation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### min: `string`<a id="min-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### sort: `'reputation' | 'creation' | 'name' | 'modified'`<a id="sort-reputation--creation--name--modified"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[UsersInner](./models/users-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUserTimelineByIds`<a id="stackexchangeusergetusertimelinebyids"></a>

Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTimelineByIdsResponse =
  await stackexchange.user.getUserTimelineByIds({
    ids: "ids_example",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[UserTimelineObjectsInner](./models/user-timeline-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/timeline` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUserTopAnswerTags`<a id="stackexchangeusergetusertopanswertags"></a>

Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTopAnswerTagsResponse =
  await stackexchange.user.getUserTopAnswerTags({
    id: 1,
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[TopTagObjectsInner](./models/top-tag-objects-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/top-answer-tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getUserTopAnswers`<a id="stackexchangeusergetusertopanswers"></a>

Returns the top 30 answers a user has posted in response to questions with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of answers.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTopAnswersResponse = await stackexchange.user.getUserTopAnswers({
  id: 1,
  tags: "tags_example",
  order: "desc",
  sort: "activity",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### tags: `string`<a id="tags-string"></a>

String list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AnswersInner](./models/answers-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/tags/{tags}/top-answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.getWritePermissions`<a id="stackexchangeusergetwritepermissions"></a>

Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWritePermissionsResponse =
  await stackexchange.user.getWritePermissions({
    id: 1,
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[WritePermissionsInner](./models/write-permissions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/write-permissions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.listAccountMerges`<a id="stackexchangeuserlistaccountmerges"></a>

Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccountMergesResponse = await stackexchange.user.listAccountMerges({
  ids: "ids_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[AccountMergeInner](./models/account-merge-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/merges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.listElectedModeratorUsers`<a id="stackexchangeuserlistelectedmoderatorusers"></a>

Returns those users on a site who both have moderator powers, and were actually elected.
 
This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of users.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listElectedModeratorUsersResponse =
  await stackexchange.user.listElectedModeratorUsers({
    order: "desc",
    sort: "reputation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### min: `string`<a id="min-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### sort: `'reputation' | 'creation' | 'name' | 'modified'`<a id="sort-reputation--creation--name--modified"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[UsersInner](./models/users-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/moderators/elected` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.listModeratorUsers`<a id="stackexchangeuserlistmoderatorusers"></a>

Gets those users on a site who can exercise moderation powers.
 
Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of users.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listModeratorUsersResponse = await stackexchange.user.listModeratorUsers({
  order: "desc",
  sort: "reputation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### min: `string`<a id="min-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### sort: `'reputation' | 'creation' | 'name' | 'modified'`<a id="sort-reputation--creation--name--modified"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[UsersInner](./models/users-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/moderators` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.listNoAnswerQuestions`<a id="stackexchangeuserlistnoanswerquestions"></a>

Gets the questions asked by the users in {ids} which have no answers.
 
Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listNoAnswerQuestionsResponse =
  await stackexchange.user.listNoAnswerQuestions({
    ids: "ids_example",
    order: "desc",
    sort: "activity",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = activity => date sort = creation => date sort = votes => number 

##### sort: `'activity' | 'creation' | 'votes'`<a id="sort-activity--creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[QuestionsInner](./models/questions-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/questions/no-answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.listUserBadges`<a id="stackexchangeuserlistuserbadges"></a>

Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserBadgesResponse = await stackexchange.user.listUserBadges({
  ids: "ids_example",
  order: "desc",
  sort: "rank",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = rank => string sort = name => string sort = type => string sort = awarded => date 

##### min: `string`<a id="min-string"></a>

sort = rank => string sort = name => string sort = type => string sort = awarded => date 

##### sort: `'rank' | 'name' | 'type' | 'awarded'`<a id="sort-rank--name--type--awarded"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[BadgesInner](./models/badges-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/badges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.listUsers`<a id="stackexchangeuserlistusers"></a>

Returns all users on a site.
 
This method returns a list of users.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUsersResponse = await stackexchange.user.listUsers({
  order: "desc",
  sort: "reputation",
  site: "site_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### inname: `string`<a id="inname-string"></a>

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### min: `string`<a id="min-string"></a>

sort = reputation => number sort = creation => date sort = name => string sort = modified => date 

##### sort: `'reputation' | 'creation' | 'name' | 'modified'`<a id="sort-reputation--creation--name--modified"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[UsersInner](./models/users-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `stackexchange.user.mentionedCommentsList`<a id="stackexchangeusermentionedcommentslist"></a>

Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


 
This method returns a list of comments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const mentionedCommentsListResponse =
  await stackexchange.user.mentionedCommentsList({
    ids: "ids_example",
    order: "desc",
    sort: "creation",
    site: "site_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Number list (semicolon delimited).

##### site: `string`<a id="site-string"></a>

Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 

##### order: `'desc' | 'asc'`<a id="order-desc--asc"></a>

##### max: `string`<a id="max-string"></a>

sort = creation => date sort = votes => number 

##### min: `string`<a id="min-string"></a>

sort = creation => date sort = votes => number 

##### sort: `'creation' | 'votes'`<a id="sort-creation--votes"></a>

##### fromdate: `number`<a id="fromdate-number"></a>

Unix date.

##### todate: `number`<a id="todate-number"></a>

Unix date.

##### pagesize: `number`<a id="pagesize-number"></a>

##### page: `number`<a id="page-number"></a>

##### filter: `string`<a id="filter-string"></a>

#Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 

##### callback: `string`<a id="callback-string"></a>

All API responses are JSON, we do support JSONP with the callback query parameter. 

#### 🔄 Return<a id="🔄-return"></a>

[CommentsInner](./models/comments-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{ids}/mentioned` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
