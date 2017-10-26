<?php
/**
 * @file
 * Default theme implementation for matterhorn account login form.
 *
 * Available variables:
 * - $username: Username field 
 * - $password: Password field
 * - $actions: Submit button
 * - $messages: Messages received during account login.
 * - $links: Assiociative array that contains (registration and forgot password links).
 *
 * @see template_preprocess_account_pre_login()
 *
 * @ingroup themeable
 */
?>
<?php print $form_build; ?>
<?php print $messages; ?>
<div class="clearfix login">
    <?php print $username; ?>
    <?php print $password; ?>
    <?php print $actions; ?>
</div>
<div class="clearfix register-area rounded">
    <span class="btn-register"><a href="<?php print $links['registration']; ?>"><?php print t('Join Now'); ?></a></span>
    <span class="btn-forgot-password"><a href="<?php print $links['forgot_password']; ?>"><?php print t('Forgot Password?'); ?></a></span>
</div>