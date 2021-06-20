import React, { useEffect } from "react";
import CmsPage from "./CmsPage.component";
import { connect } from "react-redux";
import { getCmsPage } from "../../store/cms/cms.actions";
import SiteLoading from "../SiteLoading/SiteLoading.component";

const mapStateToProps = (_state) => {
  return {
    cmsPage: _state.cmsReducer.cmsPage,
    isLoading: _state.cmsReducer.loading,
  };
};

const mapDispatchToProps = (_dispatch) => {
  return {
    getCmsPage: (uri) => {
      return _dispatch(getCmsPage(uri));
    },
  };
};

const CmsPageContainer = (props) => {
  const { getCmsPage, location, isLoading } = props;

  useEffect(() => {
    getCmsPage(location.pathname);
  }, [location.pathname, getCmsPage]);

  return isLoading ? <SiteLoading /> : <CmsPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CmsPageContainer);
