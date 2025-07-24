# Elizabeth's website

## Decap CMS
Elizabeth can make changes to the site using the Decap CMS frontend. It is located at /admin. 

See [Decap CMS docs](https://decapcms.org/docs/intro/) and the [plugin used for authenticating to Github with OAuth](https://github.com/i40west/netlify-cms-cloudflare-pages/tree/main), which relies on the `functions` directory here to be running as Cloudflare Pages functions, and the setup found at the [plugin readme](https://github.com/i40west/netlify-cms-cloudflare-pages/tree/main).

The site URL should be set in admin/config.yml in both `backend.site_domain` and `backend.base_url` to support the Github oauth flow.
