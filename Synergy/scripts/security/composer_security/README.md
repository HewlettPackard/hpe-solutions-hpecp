# Securing HPE Synergy Composer powered by HPE OneView

This folder consists of initial scripts to secure HPE composer powered by HPE OneView.

## Overview
This automation script updates the following security parameters available in HPE Synergy Composer:
1. Cryptographic mode 
    This option allows the configuration of the cryptography mode for your HPE Synergy Composer appliance. Available cryptography modes include:
    * Legacy: This is the default cryptography mode. In the legacy mode all TLS protocol versions (1.0, 1.1, and 1.2) and associated cipher suites for those versions are supported. TLS certificates are not required to have FIPS or CNSA minimum key lengths nor strong digital signatures.

    * FIPS: Federal Information Processing Standard (FIPS) Publication 140-2 is a U.S. government computer security standard for products performing cryptography. The FIPS 140-2 Cryptographic Module Validation Program has validated the cryptography libraries of HPE OneView. When in the FIPS mode:
        * The cryptographic modules of the appliance are configured to operate in accordance with the FIPS 140-2 level 1 specification. This setting ensures that the required FIPS self-tests are run while loading these cryptographic modules.
        * The ciphers and algorithms used for cryptographic operations by the appliance are restricted to only those approved by FIPS.
        * The appliance allows only TLS1.1 and TLS 1.2 protocols for all TLS communications.
        * All SSH and SNMPv3 communication use only cipher suites and algorithms approved by FIPS.

        For additional information, see the FIPS-140 site at http://csrc.nist.gov/groups/STM/cmvp/standards.html.

    * CNSA: The Commercial National Security Algorithm (CNSA) cryptography mode restricts HPE OneView to use only those algorithms included in the CNSA suite. The CNSA suite is a subset of the general FIPS support and includes a set of algorithms used to protect national security systems, including information classified as 'top secret.' In the CNSA mode, the appliance uses only TLS 1.2 protocol and a CNSA-strength subset of the TLS 1.2 ciphers. Similarly, SSH and SNMP communication uses CNSA-compliant ciphers and algorithms.

        For additional information, see the CNSA standards site at https://www.iad.gov/iad/programs/iad-initiatives/cnsa-suite.cfm.

2. Enforcing Complex Password
        This option allows the configuration of the Complex password requirements for the HPE Synergy Composer. 
        Complex password is enforced when users change their password or create user accounts. Complex password rules apply only for the local users configured in HPE OneView. For authentication directory service users, the authentication directory configuration determines the password complexity rules
        Complex passwords must contain the following:
      * Minimum of 14 characters
      * Minimum of one uppercase character
      * Minimum of one lowercase character
      * Minimum one number
      * Minimum of one special character. For example, !@#$^*_-=+,.?
      * No whitespace

3. Hardware Setup Access
        This option allows the configuration of the Hardware setup access to the HPE Synergy Composer. This option controls whether the Hardware Setup button is available from the appliance console. This button allows credential-free access to the HardwareSetup user account from the physical system console.

4. SSH Access 
        This option allows the configuration of the SSH acess to the HPE Synergy Composer. HPE OneView supports Secure Shell (SSH) to remotely access the appliance to perform maintenance and recovery operations. Without SSH access, you must access the appliance console. To avoid requiring a console access, SSH access is enabled by default. However, remote access to maintenance and recovery operations is considered a security risk by some users. Therefore, HPE OneView provides the option to disable the remote access to the appliance via SSH.
    
    **NOTE**
    
    SSH access must be enabled to access the serial console CLI. The serial console CLI is used to access unmanaged interconnects.

5. Services Console Access 
    This option allows the configuration of the access to Service Console. By default, authorized technical support personnel are allowed to access your system through the appliance console and diagnose issues that you have reported.

    **NOTE**

    There are several ways to allow authorized support representatives to access the appliance for advanced troubleshooting operations:
    * If on site, the authorized support representative can use the appliance console or an SSH session to the HPE OneView maintenance console.
    * A shared virtual desktop session where the authorized support representative works with you to obtain a one-time password and you allow him to access the appliance console or maintenance console through the virtual desktop.
    * You can enable service console access and the service sessions features to allow the authorized support representative to access HPE OneView directly through a secure tunnel.

    Support access is privileged, which enables the authorized technical support representative to debug any problems on the appliance. Access to the services access account requires the technician to obtain a one-time password using a challenge/response mechanism similar to the one for a password reset. Any time after the initial configuration of the appliance, an Infrastructure administrator can enable or disable services access through the user interface.

For more information on the securing HPE Synergy Composer, refer to the documentation at https://techlibrary.hpe.com/docs/enterprise/servers/oneview5.2/cicf/en/index.html#c_settings-security.html 

## Prerequisites 
- CentOS 7 Installer machine with the following configurations is essential:
    1. Python 3.6 or above is present and latest version associated pip is present.
    2. Ansible 2.9 is installed
- HPE Synergy Composer powered by HPE OneView version 5.2 is available within the deployment environmnemt. 
- HPE OneView login credentials for the account with Infrastructure administrator priviliges is required.

## Installation

1. Enable Python3 and Ansible Environment as mentioned in "Installer machine" section of deployment guide.
2. There are 2 input files config.json and composer_security_config.json, both of which needs to be updated with values for all the variables present within them.
   * Execute the following command to open the config.json file and update it with the of HPE OneView IP address, X API version and credentials.

      ```
      # ansible-vault edit config.json
      ```
      **NOTE**
      
      Default password for Ansible Vault file "config.json" is changeme.

      Example values for the input configuration is as follows
      ```
        {
            "oneview_ip": "<IP address of HPE OneView>",
            "oneview_username":"<username of HPE OneView with account Infrastructure administrator priviliges>",
            "oneview_password": "<password for HPE OneView with account Infrastructure administrator priviliges>",
            "oneview_x_api_version": "<HPE OneView X API version, 1600 for HPE OneView 5.2>"
        }
      ```

   * Execute the following command to open the composer_security_config.json file and update it with the desired security configurations for HPE OneView.

      ```
      # vi composer_security_config.json
      ```

    Details about the configurations:
    1. Cryptographic mode 
        ```
        Input variable name - CryptographicMode
        Accepted values - Legacy (for enabling Legacy cryptographic mode), FIPS (for enabling FIPS cryptographic mode), CNSA (for enabling CNSA cryptographic mode)
        ```
    2. Enforcing Complex Password
        ```
        Input variable name - enforceComplexPasswordEnabled
        Accepted values - true (For enabling Complex Password) or false (For disabling Complex Password)
        ```

    3. Hardware Setup Access
        ```
        Input variable name - technicianEnabled
        Accepted values - true (For enabling Hardware setup access) or false (For disabling Hardware setup access)
        ```

    4. SSH Access
        ```
        Input variable name - allowSshAccess
        Accepted values - true (For enabling SSH access) or false (For disabling SSH access)
        ```

    5. Services Console Access 
        ```
        Input variable name - ServiceConsoleAccess
        Accepted values - true (For enabling Authorized services access) or false (For disabling Authorized services access)
        ```

    Example values for the input configuration for deploying RHEL 7.7 is as follows.
    ```
        {
            "CryptographicMode":  "CNSA",
            "enforceComplexPasswordEnabled": false,
            "technicianEnabled": false,
            "allowSshAccess": false,
            "ServiceConsoleAccess": false
        }
    ```

3. Executing the script to update the security configurations of HPE Synergy Composer.
   ```
   # python3 composer_security.py
   ```
    **NOTE**
    
    *  Default key for "Enter the key to decrypt OneView credentials file" is "changeme".
    *  This script requires a confirmation to configure the security features of HPE OneView and promts the following message. 
        * For general settings:
          Message
            ```
            Press enter to confirm the changes. By pressing enter you confirm that you understand the implications and agree for the state to be updated: 
            ```
        * For cryptographic mode settings:
          Message
    
            ```
            This operation requires a reboot and approximately takes around 40 mins once the request is initiated. 

            Press enter to confirm the changes. By pressing enter you confirm that you understand the implications and agree for the state to be updated: 
            ```

    The installation user could choose to press **enter** to approve the updates or could choose to abort the execution of the script.
    
    **NOTE**
    
    The update of the security configuration "Cryptographic Mode" requires a reboot and it approximately takes around 40 mins for the update once the request is initiated, thus the script displays the previous state for the same. The update can be seen in the OneView Global Dashboard > Settings > Security once the OneView Global Dashboard is accessible. 
