module.exports = ({
  jwt
}) => {
  const authorizer = async (event) => {
    try {
      const token = event.authorizationToken.split(' ')[1]

      if (!token) {
        return generatePolicy('user', 'Deny', event.methodArn)
      }

      const decoded = await jwt.verifyToken(token)

      return generatePolicy(decoded.id, 'Allow', event.methodArn)
    } catch (err) {
      throw new Error(err)
    }
  }

  const generatePolicy = (principalId, effect, resource) => {
    const authResponse = {
      principalId,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [{
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource
        }]
      }
    }

    return authResponse
  }

  return {
    authorizer
  }
}
