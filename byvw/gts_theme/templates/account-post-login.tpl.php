<?php
/**
 * @file
 * Default theme implementation for matterhorn account login form.
 *
 * Available variables:
 * - $account: Object that contains user account informations.
 * - $links: Assiociative array that contains (registration and forgot password links).
 *
 * @see template_preprocess_account_pre_login()
 *
 * @ingroup themeable
 */
?>
<div class="account-section">
    <ul>
        <li class="post-login-account-name"><?php print $account->username; ?></li>
        <li class="last post-login-logout"><?php print $links['logout']['default']; ?></li>
    </ul>
    <div class="banking"><?php print $variables['links']['cashier_url']['default']; ?></div>
</div>
