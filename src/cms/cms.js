import CMS from 'netlify-cms'

import StandardPagePreview from './preview-templates/StandardPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('about', StandardPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
