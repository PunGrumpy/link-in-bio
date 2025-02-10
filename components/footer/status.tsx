import 'server-only'

type BetterStackResponse = {
  data: {
    id: string
    type: string
    attributes: {
      url: string
      pronounceable_name: string
      auth_username: string
      auth_password: string
      monitor_type: string
      monitor_group_id: unknown
      last_checked_at: string
      status:
        | 'down'
        | 'maintenance'
        | 'paused'
        | 'pending'
        | 'up'
        | 'validating'
      policy_id: unknown
      required_keyword: unknown
      verify_ssl: boolean
      check_frequency: number
      call: boolean
      sms: boolean
      email: boolean
      push: boolean
      team_wait: unknown
      http_method: string
      request_timeout: number
      recovery_period: number
      request_headers: unknown[]
      request_body: string
      follow_redirects: boolean
      remember_cookies: boolean
      created_at: string
      updated_at: string
      ssl_expiration: unknown
      domain_expiration: unknown
      regions: string[]
      expected_status_codes: unknown[]
      port: unknown
      confirmation_period: number
      paused_at: unknown
      paused: boolean
      maintenance_from: unknown
      maintenance_to: unknown
      maintenance_timezone: string
    }
    relationships: {
      policy: {
        data: unknown
      }
    }
  }[]
  pagination: {
    first: string
    last: string
    prev: unknown
    next: unknown
  }
}

export const Status = async () => {
  let statusColor = 'bg-muted-foreground'
  let statusLabel = 'Unable to fetch status'

  try {
    const response = await fetch(
      'https://uptime.betterstack.com/api/v2/monitors',
      {
        headers: {
          Authorization: `Bearer ${process.env.BETTERSTACK_API_KEY}`
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch status')
    }

    const { data } = (await response.json()) as BetterStackResponse

    const status =
      data.filter(monitor => monitor.attributes.status === 'up').length /
      data.length

    if (status === 0) {
      statusColor = 'bg-destructive'
      statusLabel = 'Degraded performance'
    } else if (status < 1) {
      statusColor = 'bg-warning'
      statusLabel = 'Partial outage'
    } else {
      statusColor = 'bg-success'
      statusLabel = 'All systems normal'
    }
  } catch {
    statusColor = 'bg-muted-foreground'
    statusLabel = 'Unable to fetch status'
  }

  return (
    <a
      className="flex items-center gap-3 text-sm"
      target="_blank"
      rel="noreferrer"
      href={process.env.BETTERSTACK_URL}
    >
      <span className="relative flex size-2">
        <span
          className={`absolute inline-flex size-full animate-ping rounded-full opacity-75 ${statusColor}`}
        />
        <span
          className={`relative inline-flex size-2 rounded-full ${statusColor}`}
        />
      </span>
      <span className="text-muted-foreground transition-colors duration-500 hover:text-foreground">
        {statusLabel}
      </span>
    </a>
  )
}
